import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — Supercoder AI",
  description:
    "سياسة الخصوصية لشركة Second Team Co., Ltd. (Supercoder) وفق قانون حماية المعلومات الشخصية.",
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
        <h1 className="mb-1 text-3xl font-bold text-slate-900">
          سياسة الخصوصية
        </h1>
        <p className="mb-8 text-sm text-slate-500">Supercoder AI</p>

        <section className="divide-y divide-slate-200 text-slate-700">
          <p className="pb-8">
            قامت شركة Second Team Co., Ltd. (ويشار إليها فيما بعد بـ
            &quot;الشركة&quot;) بوضع والإفصاح عن سياسة الخصوصية التالية وفقًا
            للمادة 30 من &quot;قانون حماية المعلومات الشخصية&quot; وذلك لحماية
            البيانات الشخصية للمستخدمين ومعالجة الشكاوى ذات الصلة بشكل سريع
            وسلس.
          </p>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 1. غرض معالجة المعلومات الشخصية
            </h2>
            <p className="mt-2">
              تعالج الشركة الحد الأدنى من المعلومات الشخصية للأغراض التالية، ولن
              يتم استخدام هذه المعلومات لأي أغراض أخرى. وفي حال تغيير الغرض، سيتم
              اتخاذ الإجراءات اللازمة مثل الحصول على موافقة منفصلة.
            </p>
            <ul className="mt-3 list-disc space-y-2 ps-6">
              <li>
                <strong>إدارة العضوية:</strong> التحقق من نية التسجيل، التحقق من
                الهوية، إدارة الحساب، تقديم معلومات التوظيف (مثل المقابلات
                الذكية)، الإشعارات، منع إساءة الاستخدام.
              </li>
              <li>
                <strong>تقديم الخدمات:</strong> تقديم خدمات المقابلات بالذكاء
                الاصطناعي، تحليل النتائج، إعداد التقارير، الفوترة، تقديم المحتوى
                والخدمات المخصصة، التحقق من الهوية، الدفع والتحصيل.
              </li>
              <li>
                <strong>التسويق والإعلانات:</strong> تطوير خدمات جديدة، تقديم
                خدمات مخصصة، إرسال معلومات العروض، تحليل استخدام الخدمة. ويتم ذلك
                بعد الحصول على الموافقة المطلوبة.
              </li>
              <li>
                <strong>معالجة الشكاوى:</strong> التحقق من هوية مقدم الشكوى،
                مراجعة التفاصيل، التواصل، وإبلاغ النتائج.
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 2. مدة معالجة والاحتفاظ بالمعلومات الشخصية
            </h2>
            <h3 className="mt-3 font-semibold text-slate-900">1) المبدأ العام</h3>
            <p className="mt-2">
              تحتفظ الشركة بالمعلومات الشخصية خلال المدة المحددة قانونيًا أو
              المتفق عليها.
            </p>
            <h3 className="mt-4 font-semibold text-slate-900">2) فترات الاحتفاظ</h3>
            <h4 className="mt-3 font-semibold text-slate-800">
              (1) تسجيل وإدارة العضوية
            </h4>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>المدة:</strong> حتى إنهاء الاشتراك أو حذف الحساب
              </li>
              <li>
                <strong>استثناءات:</strong>
                <ul className="mt-1 list-disc ps-6">
                  <li>التحقيقات القانونية: حتى الانتهاء</li>
                  <li>الالتزامات المالية: حتى التسوية الكاملة</li>
                </ul>
              </li>
            </ul>
            <h4 className="mt-4 font-semibold text-slate-800">
              (2) بيانات المتقدمين والمقابلات
            </h4>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>المدة:</strong> سنة واحدة من تاريخ انتهاء المقابلة
              </li>
              <li>
                يتم الحذف فور انتهاء المدة، ما لم يوجد سبب قانوني للاحتفاظ بها.
              </li>
            </ul>
            <h4 className="mt-4 font-semibold text-slate-800">(3) تقديم الخدمات</h4>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>المدة:</strong> حتى انتهاء الخدمة وتسوية المدفوعات
              </li>
              <li>
                <strong>وفق القوانين:</strong>
                <ul className="mt-1 list-disc ps-6">
                  <li>سجلات الإعلانات: 6 أشهر</li>
                  <li>العقود والمدفوعات: 5 سنوات</li>
                  <li>الشكاوى: 3 سنوات</li>
                  <li>سجلات الاتصال (الإنترنت): 3 أشهر</li>
                  <li>الفواتير والمعاملات: 5 سنوات</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 3. مشاركة المعلومات مع أطراف ثالثة
            </h2>
            <p className="mt-2">
              لا تقوم الشركة بمشاركة المعلومات الشخصية عادة، باستثناء الحالات
              التالية:
            </p>
            <h3 className="mt-4 font-semibold text-slate-900">1) مع جهة التوظيف</h3>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>المستلم:</strong> الشركة التي دعت المتقدم
              </li>
              <li>
                <strong>الغرض:</strong> التقييم واتخاذ قرار التوظيف
              </li>
              <li>
                <strong>البيانات:</strong> فيديو، صوت، نصوص، تقييمات، سجلات
              </li>
              <li>
                <strong>المدة:</strong> حسب سياسة جهة التوظيف (بحد أقصى سنة داخل
                النظام)
              </li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">2) وفق القانون</h3>
            <p className="mt-2">عند طلب الجهات المختصة.</p>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 4. إسناد معالجة البيانات (Outsourcing)
            </h2>
            <p className="mt-2">
              تقوم الشركة بإسناد بعض المهام كما يلي:
            </p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[36rem] border-collapse text-start text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-3 font-semibold text-slate-900">الجهة</th>
                    <th className="p-3 font-semibold text-slate-900">المهمة</th>
                    <th className="p-3 font-semibold text-slate-900">البيانات</th>
                    <th className="p-3 font-semibold text-slate-900">
                      مدة الاحتفاظ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-3">Microsoft (Azure)</td>
                    <td className="p-3">تشغيل الخوادم والتخزين</td>
                    <td className="p-3">بيانات المتقدمين</td>
                    <td className="p-3">سنة واحدة</td>
                  </tr>
                  <tr>
                    <td className="p-3">Agora</td>
                    <td className="p-3">بث الفيديو والصوت</td>
                    <td className="p-3">بيانات مباشرة</td>
                    <td className="p-3">لا يتم التخزين</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">كما يتم نقل بعض البيانات دوليًا:</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[28rem] border-collapse text-start text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-3 font-semibold text-slate-900">الشركة</th>
                    <th className="p-3 font-semibold text-slate-900">الدولة</th>
                    <th className="p-3 font-semibold text-slate-900">الغرض</th>
                    <th className="p-3 font-semibold text-slate-900">المدة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Google</td>
                    <td className="p-3">الولايات المتحدة</td>
                    <td className="p-3">التحليلات</td>
                    <td className="p-3">14 شهر</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 5. حقوق المستخدم
            </h2>
            <p className="mt-2">يمكن للمستخدم:</p>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>طلب الوصول إلى بياناته</li>
              <li>تصحيح أو حذف البيانات</li>
              <li>طلب إيقاف المعالجة</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">ملاحظات:</h3>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>يتم الرد دون تأخير</li>
              <li>قد يتم تقييد بعض الطلبات حسب القانون</li>
              <li>يمكن التقديم عبر ممثل قانوني</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">الذكاء الاصطناعي:</h3>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>يمكن طلب تفسير لنتائج التحليل</li>
              <li>
                القرار النهائي يتم بواسطة إنسان (مدير التوظيف)
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 6. أنواع البيانات المعالجة
            </h2>
            <h3 className="mt-3 font-semibold text-slate-900">بيانات التسجيل:</h3>
            <ul className="mt-2 list-disc ps-6">
              <li>الاسم، البريد الإلكتروني، كلمة المرور، اسم الشركة</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">بيانات التسويق:</h3>
            <ul className="mt-2 list-disc ps-6">
              <li>الاسم، البريد الإلكتروني</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">بيانات المقابلة:</h3>
            <ul className="mt-2 list-disc ps-6">
              <li>فيديو، صوت، نصوص، السيرة الذاتية</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">بيانات تلقائية:</h3>
            <ul className="mt-2 list-disc ps-6">
              <li>
                IP، Cookies، سجل الاستخدام، الجهاز، بيانات Google Analytics
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 7. إتلاف البيانات
            </h2>
            <p className="mt-2">يتم حذف البيانات عند انتهاء الغرض منها.</p>
            <h3 className="mt-3 font-semibold text-slate-900">طرق الإتلاف:</h3>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>إلكتروني:</strong> حذف نهائي غير قابل للاسترجاع
              </li>
              <li>
                <strong>ورقي:</strong> تمزيق أو حرق
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 8. إجراءات الحماية
            </h2>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>وضع سياسات داخلية للحماية</li>
              <li>التحكم في الوصول</li>
              <li>مراقبة السجلات</li>
              <li>تخزين آمن للبيانات</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 9. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p className="mt-2">
              تستخدم الشركة الكوكيز لتحسين الخدمة.
            </p>
            <h3 className="mt-3 font-semibold text-slate-900">الغرض:</h3>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>تحليل الاستخدام</li>
              <li>تحسين الأداء</li>
              <li>تخصيص المحتوى</li>
            </ul>
            <h3 className="mt-4 font-semibold text-slate-900">إدارة الكوكيز:</h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[28rem] border-collapse text-start text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-3 font-semibold text-slate-900">الجهاز</th>
                    <th className="p-3 font-semibold text-slate-900">المتصفح</th>
                    <th className="p-3 font-semibold text-slate-900">المسار</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-3">كمبيوتر</td>
                    <td className="p-3">Chrome</td>
                    <td className="p-3">Settings {">"} Privacy</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3">كمبيوتر</td>
                    <td className="p-3">Edge</td>
                    <td className="p-3">Settings {">"} Cookies</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-3">جوال</td>
                    <td className="p-3">Chrome</td>
                    <td className="p-3">Settings {">"} Privacy</td>
                  </tr>
                  <tr>
                    <td className="p-3">جوال</td>
                    <td className="p-3">Safari</td>
                    <td className="p-3">Settings {">"} Block Cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 10. مسؤول حماية البيانات
            </h2>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>
                <strong>الاسم:</strong> Choi Jae-woong
              </li>
              <li>
                <strong>المنصب:</strong> CISO / CPO
              </li>
              <li>
                <strong>البريد:</strong>{" "}
                <a
                  href="mailto:privacy@supercoder.co"
                  className="text-purple-deep hover:underline"
                >
                  privacy@supercoder.co
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 11. معالجة الشكاوى
            </h2>
            <p className="mt-2">يمكن التواصل مع الجهات التالية:</p>
            <ul className="mt-2 list-disc space-y-2 ps-6">
              <li>مركز الإبلاغ عن انتهاك الخصوصية: 118</li>
              <li>لجنة تسوية النزاعات: 1833-6972</li>
              <li>النيابة العامة: 1301</li>
              <li>الشرطة: 182</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-xl font-bold text-slate-900">
              المادة 12. تعديل السياسة
            </h2>
            <p className="mt-2">
              تدخل هذه السياسة حيز التنفيذ من تاريخ نشرها، ويتم إشعار المستخدمين
              بأي تغييرات.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              تاريخ السريان: 29 يناير 2026
            </p>
          </div>
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
