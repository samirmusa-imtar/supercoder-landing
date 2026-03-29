import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الخدمة للمرشحين — Supercoder AI",
  description:
    "شروط استخدام خدمة مقابلة Supercoder بالذكاء الاصطناعي للمرشحين — Second Team Inc.",
};

export default function TermsCandidatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link
            href="/"
            className="text-sm font-semibold text-purple-deep hover:underline"
          >
            العودة للصفحة الرئيسية ←
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/terms" className="hover:text-slate-900">
              الشروط والأحكام
            </Link>
            <Link href="/privacy" className="hover:text-slate-900">
              سياسة الخصوصية
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-1 text-3xl font-bold text-slate-900">
          شروط الخدمة للمرشحين (Supercoder)
        </h1>
        <p className="mb-8 text-sm font-medium text-slate-600">
          تاريخ السريان: 15 يناير 2026
        </p>

        <section className="divide-y divide-slate-200 text-slate-700">
          <div className="pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 1 (الغرض)
            </h2>
            <p className="mt-3">
              الغرض من هذه الشروط هو تحديد شروط وإجراءات استخدام &quot;خدمة مقابلة
              Supercoder بالذكاء الاصطناعي&quot; (المشار إليها فيما بعد باسم
              &quot;الخدمة&quot;) المقدمة من شركة Second Team Inc. (المشار إليها
              فيما بعد باسم &quot;الشركة&quot;) للمتقدمين (المشار إليهم فيما بعد
              باسم &quot;المرشح&quot;).
            </p>
          </div>

          <div className="pt-8 pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 2 (حماية المعلومات الشخصية والمعلومات الحساسة)
            </h2>
            <ul className="mt-3 list-disc space-y-4 ps-6">
              <li>
                <strong>استضافة البيانات:</strong> يتم تخزين وإدارة بيانات
                المقابلة الخاصة بالمرشح (بما في ذلك الفيديو والصوت) في منطقة آمنة
                داخل جمهورية كوريا (منطقة سيول).
              </li>
              <li>
                <strong>الموافقة على المعلومات الحساسة:</strong> نظرًا لطبيعة
                المقابلات المرئية، سيتم جمع معلومات حساسة (بيانات القياسات
                الحيوية) مثل ملامح الوجه والبيانات الصوتية. تحصل الشركة على موافقة
                صريحة ومنفصلة على ذلك، وللمرشح الحق في رفض ذلك. ومع ذلك، قد يؤدي
                رفض الموافقة إلى تقييد استخدام الخدمة (إجراء المقابلة).
              </li>
              <li>
                <strong>حماية البيانات:</strong> تقوم الشركة بتشفير وتخزين بيانات
                المرشح بشكل آمن، ولا تستخدمها لأغراض أخرى غير التوظيف.
              </li>
            </ul>
          </div>

          <div className="pt-8 pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 3 (طبيعة تقييم الذكاء الاصطناعي والحق في طلب التوضيح)
            </h2>
            <div className="mt-3 space-y-4">
              <p>
                <strong>أداة تحليل مساعدة:</strong> يؤدي الذكاء الاصطناعي في هذه
                الخدمة دورًا داعمًا من خلال تنظيم وتحليل ردود المرشح لإنشاء تقرير.
              </p>
              <p>
                <strong>صاحب القرار النهائي والجهة المخولة بالاستفسار:</strong>{" "}
                السلطة النهائية المسؤولة عن تحديد قبول أو رفض المرشح هي جهة
                التوظيف (العميل) التي تقدم إليها المرشح. لذلك، إذا رغب المرشح في
                طلب توضيح أو إعادة تقييم لنتائج مقابلة الذكاء الاصطناعي أو قرار
                التوظيف، يجب عليه التواصل مع القسم المعني في جهة التوظيف
                (العميل).
              </p>
              <p>
                <strong>عدم وجود قرار آلي بالكامل:</strong> نظرًا لأن القرار
                النهائي يُتخذ من خلال مراجعة بشرية من قبل مسؤول جهة التوظيف، فإن
                هذه الخدمة لا تشكل &quot;قرارًا آليًا بالكامل&quot; وفقًا للمادة
                37-2 من قانون حماية المعلومات الشخصية. ومع ذلك، تقدم الشركة
                التعاون الفني لضمان قدرة جهة التوظيف على الرد على استفسارات
                المرشح بشكل فعال.
              </p>
            </div>
          </div>

          <div className="pt-8 pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 4 (التزامات المرشح)
            </h2>
            <ul className="mt-3 list-disc space-y-4 ps-6">
              <li>
                <strong>المشاركة الشخصية:</strong> يجب على المرشح المشاركة في
                المقابلة شخصيًا. أي سلوك غير لائق، مثل الاستعانة ببديل، أو الردود
                غير الطبيعية باستخدام الذكاء الاصطناعي التوليدي، أو التلاعب
                بالنظام، سيؤدي إلى إبطال النتائج وربما فرض عقوبات في عملية
                التوظيف.
              </li>
              <li>
                <strong>حظر تسريب المعلومات:</strong> لا يجوز للمرشح التقاط أو
                تسجيل أو تسريب أسئلة المقابلة أو شاشات النظام إلى جهات خارجية
                (المجتمعات الإلكترونية، مواقع التواصل الاجتماعي، إلخ) أو استخدامها
                لأغراض تجارية. تشكل هذه الأفعال انتهاكًا للملكية الفكرية للشركة
                وسرية التوظيف لدى جهة التوظيف.
              </li>
              <li>
                <strong>تجهيز البيئة:</strong> يتحمل المرشح مسؤولية تجهيز بيئة
                شبكة مستقرة وكاميرا/ميكروفون يعملان بشكل صحيح. لا تتحمل الشركة
                مسؤولية أي انقطاع ناتج عن عطل في جهاز المرشح.
              </li>
            </ul>
          </div>

          <div className="pt-8 pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 5 (القيود العمرية)
            </h2>
            <p className="mt-3">
              الخدمة مخصصة للمرشحين الذين تبلغ أعمارهم 14 عامًا أو أكثر. يُحظر
              استخدام الخدمة من قبل الأفراد الذين تقل أعمارهم عن 14 عامًا من حيث
              المبدأ.
            </p>
          </div>

          <div className="pt-8 pb-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 6 (حدود المسؤولية)
            </h2>
            <p className="mt-3">
              لا تكون الشركة مسؤولة عن انقطاع الخدمة الناتج عن أسباب قاهرة، مثل
              الكوارث الطبيعية أو أعطال الاتصالات. بينما تسعى الشركة جاهدة للحفاظ
              على موضوعية تحليل الذكاء الاصطناعي، فإنها لا تضمن عدم وجود أخطاء
              ناتجة عن بيئة الاختبار (الإضاءة، الضوضاء الخلفية، إلخ).
            </p>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 7 (القانون الحاكم والولاية القضائية)
            </h2>
            <p className="mt-3">
              تخضع هذه الشروط وتُفسر وفقًا لقوانين جمهورية كوريا. تخضع أي نزاعات
              تنشأ عن الخدمة للولاية القضائية الحصرية لمحكمة منطقة سيول المركزية.
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/terms"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            الشروط والأحكام
          </Link>
          <Link
            href="/privacy"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            سياسة الخصوصية
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
