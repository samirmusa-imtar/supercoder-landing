import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Supercoder AI",
  description: "سياسة الخصوصية لمنصة Supercoder AI للتوظيف المدعوم بالذكاء الاصطناعي.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-sm font-semibold text-purple-deep hover:underline"
          >
            العودة للصفحة الرئيسية ←
          </Link>
          <Link
            href="/terms"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            الشروط والأحكام
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          سياسة الخصوصية — Supercoder AI
        </h1>
        <p className="mb-8 text-sm text-slate-500">آخر تحديث: يونيو 2025</p>

        <section className="space-y-6 text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">1. من نحن</h2>
          <p>
            Second Team Inc. (تعمل تجاريًا باسم Supercoder) هي الجهة المسؤولة عن
            تشغيل الخدمات. للتواصل:{" "}
            <a
              href="mailto:support@supercoder.co"
              className="text-purple-deep hover:underline"
            >
              support@supercoder.co
            </a>
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            2. نطاق هذه السياسة
          </h2>
          <p>
            تنطبق على بيانات المستخدمين (موظفي العملاء) والمرشحين وأي زائر
            للموقع، عند استخدام: نماذج طلب العرض التجريبي، المقابلات والتقييمات
            والتقارير، والدعم الفني.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            3. الأدوار (متحكم/معالج) في سياق B2B
          </h2>
          <p>
            غالبًا يكون العميل (صاحب العمل) هو المتحكم بالبيانات لبيانات
            المرشحين. وتكون Supercoder معالجًا للبيانات نيابةً عن العميل وفق
            العقد/اتفاقية معالجة البيانات (DPA) حيث تنطبق. في بعض الحالات (مثل
            تواصل مباشر من زائر بالموقع)، قد نكون متحكمًا في بيانات التواصل.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            4. البيانات التي نجمعها
          </h2>
          <p>
            <strong>(أ) بيانات حسابات العملاء:</strong> الاسم، البريد الوظيفي،
            الشركة، الدور، سجلات الدخول، إعدادات الصلاحيات.
          </p>
          <p>
            <strong>(ب) بيانات المرشحين:</strong> السيرة الذاتية، البيانات
            المهنية، إجابات المقابلة، نتائج التقييم، النصوص، التسجيلات
            (فيديو/صوت/شاشة عند التفعيل).
          </p>
          <p>
            <strong>(ج) بيانات تقنية:</strong> عنوان IP، نوع المتصفح، معلومات
            الجهاز، سجلات النظام، ملفات تعريف الارتباط (Cookies).
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            5. لماذا نعالج بياناتك (الأغراض)
          </h2>
          <ul className="list-disc ps-6">
            <li>تشغيل الخدمات وتقديمها</li>
            <li>تنفيذ المقابلات وإصدار التقارير</li>
            <li>التحقق من النزاهة ومنع الاحتيال</li>
            <li>الدعم الفني والتحسينات التشغيلية</li>
            <li>الامتثال للأنظمة وحماية الحقوق</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">
            6. الأسس النظامية (بشكل عام)
          </h2>
          <p>
            قد نعتمد على: تنفيذ عقد/تقديم خدمة للعميل؛ المصلحة المشروعة (مثل
            أمن الخدمة ومنع الاحتيال)؛ الموافقة عند الحاجة (خصوصًا للمرشحين
            والتسجيلات وفق ما يقتضيه النظام)؛ الالتزام القانوني. في السعودية،
            يخضع ذلك لمتطلبات PDPL ولوائحه بحسب انطباقها.
          </p>

          <h2 className="text-xl font-bold text-slate-900">7. مشاركة البيانات</h2>
          <p>
            قد نشارك البيانات مع: العميل صاحب العمل (لغايات التقييم واتخاذ قرار
            التوظيف)؛ مزودي خدمات (استضافة، أمن، بريد، تحليلات) وفق التزامات
            تعاقدية؛ جهات رسمية عند الإلزام النظامي أو لحماية الحقوق.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            8. مهم جدًا: عدم استخدام بيانات العملاء/المرشحين لتدريب النماذج
            افتراضيًا
          </h2>
          <p>
            لا نستخدم بيانات المرشحين أو بيانات العملاء (بما فيها التسجيلات
            والنصوص والتقارير) لتدريب أو تحسين نماذج الذكاء الاصطناعي أو بناء
            datasets بشكل افتراضي. لا يتم ذلك إلا بموافقة صريحة وبموجب اتفاق
            مكتوب منفصل يحدد النطاق والضوابط. قد نستخدم بيانات مجهولة/مجمعة غير
            قابلة للتحديد لتحسين الأداء التشغيلي (مثل تحسين زمن الاستجابة
            واكتشاف الأعطال).
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            9. نقل البيانات عبر الحدود
          </h2>
          <p>
            قد تُعالج البيانات أو تُخزن في دول خارج بلد المستخدم حسب مواقع
            الاستضافة ومزودي الخدمة. عند انطباق PDPL في السعودية، يتم التعامل
            مع نقل البيانات خارج المملكة وفق اللوائح ذات الصلة.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            10. مدة الاحتفاظ
          </h2>
          <p>
            نحتفظ بالبيانات للمدة اللازمة لتحقيق الأغراض المذكورة أو حسب المتطلبات
            التعاقدية/القانونية، ثم نقوم بالحذف أو إخفاء الهوية عند الإمكان.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            11. أمن المعلومات
          </h2>
          <p>
            نطبق إجراءات أمنية تقنية وتنظيمية مناسبة (مثل التحكم بالوصول، السجلات،
            التشفير عند الاقتضاء، المراقبة، سياسات الاحتفاظ).
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            12. حقوق أصحاب البيانات
          </h2>
          <p>
            قد تشمل (بحسب النظام المطبق): الوصول، التصحيح، الحذف، سحب الموافقة،
            الاعتراض أو تقييد المعالجة، وطلبات أخرى. طلبات الحقوق يمكن تقديمها
            عبر:{" "}
            <a
              href="mailto:support@supercoder.co"
              className="text-purple-deep hover:underline"
            >
              support@supercoder.co
            </a>{" "}
            في سياق B2B، قد يحتاج المرشح لتقديم الطلب عبر جهة العميل (المتحكم)
            حسب ترتيبات العقد.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            13. ملفات تعريف الارتباط (Cookies)
          </h2>
          <p>
            قد نستخدم Cookies لتحسين التجربة وقياس الأداء. يمكنك التحكم بها عبر
            إعدادات المتصفح. قد يؤثر تعطيلها على بعض الوظائف.
          </p>

          <h2 className="text-xl font-bold text-slate-900">14. الأطفال</h2>
          <p>الخدمات غير موجهة لمن هم دون 18 عامًا.</p>

          <h2 className="text-xl font-bold text-slate-900">
            15. تحديثات السياسة
          </h2>
          <p>
            قد نحدّث هذه السياسة من وقت لآخر. سننشر النسخة المحدثة مع تاريخ
            &quot;آخر تحديث&quot;.
          </p>

          <h2 className="text-xl font-bold text-slate-900">16. التواصل</h2>
          <p>
            <strong>البريد:</strong>{" "}
            <a
              href="mailto:support@supercoder.co"
              className="text-purple-deep hover:underline"
            >
              support@supercoder.co
            </a>
          </p>
          <p>
            <strong>العنوان:</strong> 405A، الطابق الرابع، 37، Seongsui-ro
            22-gil، Seongdong-gu، Seoul، جمهورية كوريا
          </p>
        </section>

        <div className="mt-16 flex justify-center gap-4">
          <Link
            href="/terms"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            الشروط والأحكام
          </Link>
          <Link
            href="/"
            className="rounded-full bg-purple-deep px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </main>
    </div>
  );
}
