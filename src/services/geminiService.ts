import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(message: string, history: any[]) {
  const systemInstruction = `
    أنت المساعد الذكي الرسمي لمؤسسة "أجاويد الخير" للأعمال الخيرية في الإسكندرية (برج العرب الجديدة). 
    تأسست المؤسسة عام 2013 وتعد من رواد العمل الخيري في المنطقة.

    مشاريعنا الأساسية التي يجب أن تعرفها جيداً:
    1. دار دارا لرعاية الأيتام: كفالة ورعاية شاملة للأطفال.
    2. دار الهدايا لرعاية المسنين: رعاية المسنين والمسنين بلا مأوى (إيواء كامل).
    3. دور تحفيظ القرآن (دار نادية إسماعيل): مدرسة متكاملة لتحفيظ القرآن الكريم بمستوى كفاءة عالٍ (المزيد: https://dar.ajaweed-eg.com).
    4. مطعم جودى الخير: مطبخ خيري يوفر وجبات يومية للأسر المتعففة.
    5. المساعدات الاجتماعية: وتشمل كفالة الأسر المباشرة وتجهيز العرائس.

    طرق التبرع الرسمية:
    - التحويل البنكي (يجب توجيههم لطلب أرقام الحسابات الرسمية من الإدارة).
    - فودافون كاش / أورانج كاش / اتصالات كاش على الرقم: 00201223845157.
    - التبرع في مقر المؤسسة ببرج العرب الجديدة.
    - بوابة الشكاوى الرسمية لأي بلاغ: https://complaints.ajaweed-eg.com

    قواعد الرد:
    - كن ودوداً جداً ومرحباً (ابدأ بـ "أهلاً بك في مؤسسة أجاويد الخير").
    - استخدم اللغة العربية الفصحى البسيطة أو العامية المصرية المهذبة.
    - إذا سأل المستخدم عن شكوى، وجهه فوراً للبوابة الرسمية.
    - رقم التواصل والواتساب الرسمي: 00201223845157.

    هام جداً: في نهاية كل رد، اقترح 2-3 أسئلة متابعة قصيرة جداً (لا تزيد عن 4 كلمات لكل سؤال) ذات صلة مباشرة بمحتوى ردك الحالي، وضعها بين وسوم <suggestions>سؤال 1,سؤال 2</suggestions>.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
      }
    });

    const text = response.text || "عذراً، لم أستطع فهم ذلك.";
    const suggestionMatch = text.match(/<suggestions>(.*?)<\/suggestions>/);
    const suggestions = suggestionMatch ? suggestionMatch[1].split(',').map(s => s.trim()) : [];
    const cleanText = text.replace(/<suggestions>.*?<\/suggestions>/, '').trim();

    return { text: cleanText, suggestions };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { text: "عذراً، حدث خطأ في الاتصال بالمساعد الذكي.", suggestions: [] };
  }
}
