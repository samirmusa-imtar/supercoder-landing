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
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link
            href="/"
            className="text-sm font-semibold text-purple-deep hover:underline"
          >
            العودة للصفحة الرئيسية ←
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="/terms" className="hover:text-slate-900">
              شروط الخدمة للشركات
            </Link>
            <Link href="/terms-candidates" className="hover:text-slate-900">
              شروط الخدمة للمرشحين
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <article className="text-slate-700">
          <h1 className="mb-4 text-3xl font-bold text-slate-900">
            سياسة الخصوصية
          </h1>
          <p className="mb-2 text-slate-800">
            شركة Second Team Co., Ltd. (المشار إليها فيما بعد بـ &apos;الشركة&apos;)
          </p>
          <p className="mb-10 text-slate-800">
            وضعت وأعلنت سياسة الخصوصية التالية وفقًا للمادة 30 من &apos;قانون حماية
            المعلومات الشخصية&apos; بهدف حماية المعلومات الشخصية للمستخدمين ومعالجة
            الشكاوى ذات الصلة بسرعة وسلاسة.
          </p>

          <section
            className="divide-y divide-slate-200 border-t border-slate-200"
            aria-label="مواد سياسة الخصوصية"
          >
            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 1: الغرض من معالجة المعلومات الشخصية
              </h2>
              <p className="mt-3">
                تعالج الشركة الحد الأدنى من المعلومات الشخصية اللازمة للأغراض
                التالية. لن يتم استخدام المعلومات الشخصية التي تتم معالجتها لأغراض
                أخرى غير تلك المحددة، وفي حال تغيير الغرض من الاستخدام، سيتم تنفيذ
                التدابير اللازمة مثل الحصول على موافقة منفصلة.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  تأكيد الرغبة في الانضمام وإدارة عضوية الشركة (المشار إليها فيما
                  بعد بـ &apos;جهة التوظيف&apos;): تحديد هوية المستخدم ومصادقته
                  لاستخدام الخدمة، والحفاظ على المؤهلات وإدارتها، وتقديم المعلومات
                  المتعلقة بعملية التوظيف (مقابلات الذكاء الاصطناعي، إلخ)، وإخطار
                  المرشحين، والتواصل بخصوص التوظيف واستخدام الموقع، ومنع الاستخدام
                  الاحتيالي، وغيرها.
                </p>
                <p>
                  توفير السلع أو الخدمات: معالجة المعلومات الشخصية لغرض تقديم خدمات
                  مقابلة الذكاء الاصطناعي، وتحليل نتائج المقابلة، وإنشاء وتقديم
                  تقارير التحليل (تُقدم لجهة التوظيف)، وإرسال الفواتير، وتقديم
                  المحتوى، وتقديم خدمات مخصصة، والتحقق من الهوية، والدفع والتسوية،
                  وتحصيل الديون.
                </p>
                <p>
                  استخدام التسويق والإعلان: معالجة المعلومات الشخصية لغرض تطوير
                  خدمات جديدة (منتجات) وتقديم خدمات مخصصة، وتقديم معلومات الفعاليات
                  والإعلانات وفرص المشاركة، وتقديم الخدمات والإعلانات بناءً على
                  الخصائص الديموغرافية، وتحديد تكرار الوصول أو إحصائيات استخدام
                  الخدمة، إلخ. في هذه الحالة، تلتزم الشركة بالقوانين ذات الصلة
                  وتحصل على الموافقة المنفصلة اللازمة.
                </p>
                <p>
                  معالجة الشكاوى: معالجة المعلومات الشخصية لغرض التحقق من هوية مقدم
                  الشكوى، وتأكيد تفاصيل الشكوى، والاتصال والإخطار للتحقيقات
                  الميدانية، والإخطار بنتائج المعالجة.
                </p>
              </div>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 2: فترة معالجة والاحتفاظ بالمعلومات الشخصية
              </h2>
              <p className="mt-3">
                تقوم الشركة بمعالجة والاحتفاظ بالمعلومات الشخصية ضمن فترات الاحتفاظ
                والاستخدام المحددة بموجب القوانين واللوائح أو المتفق عليها عند جمع
                المعلومات الشخصية من أصحاب المعلومات.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                فترات معالجة والاحتفاظ بالمعلومات الشخصية هي كما يلي:
              </p>
              <h3 className="mt-4 font-semibold text-slate-900">
                تسجيل العضوية وإدارة الموقع الإلكتروني
              </h3>
              <p className="mt-2">
                فترة الاحتفاظ: حتى انتهاء الاشتراك في الخدمة والانسحاب من الموقع
              </p>
              <p className="mt-2">
                ومع ذلك، في الحالات التي يندرج تحت الأسباب التالية، سيتم الاحتفاظ بها
                حتى انتهاء السبب:
              </p>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>
                  إذا كان تحقيق أو استفسار جارٍ بسبب انتهاك القوانين ذات الصلة، فسيتم
                  الاحتفاظ بها حتى اكتمال التحقيق أو الاستفسار.
                </li>
                <li>
                  في حالة وجود علاقات دائن-مدين متبقية بسبب استخدام الخدمة: حتى تسوية
                  هذه العلاقات واستكمال فوترة رسوم الاشتراك غير المدفوعة.
                </li>
              </ul>
              <h3 className="mt-6 font-semibold text-slate-900">
                معالجة المعلومات الشخصية للشركة والمتقدمين
              </h3>
              <p className="mt-2">
                فترة الاحتفاظ: سنة واحدة من تاريخ اكتمال مقابلة الذكاء الاصطناعي
              </p>
              <p className="mt-2">
                هذه الفترة لضمان نزاهة عملية التوظيف وإدارة إعادة تقديم المتقدمين،
                وسيتم إتلافها دون تأخير عند انتهاء الصلاحية. ومع ذلك، إذا طلبت جهة
                التوظيف الاحتفاظ لأسباب قانونية منفصلة، فسيتم اتباع تلك الفترة.
              </p>
              <h3 className="mt-6 font-semibold text-slate-900">
                توفير السلع أو الخدمات
              </h3>
              <p className="mt-2">
                فترة الاحتفاظ: حتى اكتمال تقديم خدمة الاشتراك وتسوية الفواتير/الدفع
              </p>
              <p className="mt-2">
                ومع ذلك، في الحالات التي يكون فيها الاحتفاظ ضروريًا بموجب القوانين
                ذات الصلة، سيتم الاحتفاظ بها حتى نهاية فترة التنفيذ على النحو
                التالي:
              </p>
              <p className="mt-3">
                السجلات بموجب &apos;قانون حماية المستهلك في التجارة الإلكترونية،
                إلخ&apos;:
              </p>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>سجلات الإعلان: 6 أشهر</li>
                <li>سجلات العقود أو إلغاء الاشتراكات والمدفوعات وتوفير السلع: 5 سنوات</li>
                <li>سجلات شكاوى المستهلكين أو تسوية النزاعات: 3 سنوات</li>
              </ul>
              <p className="mt-4">
                السجلات بموجب المادة 41 من &apos;قانون حماية أسرار الاتصالات&apos;:
              </p>
              <ul className="mt-2 list-disc ps-6">
                <li>
                  الاتصالات الحاسوبية، سجلات الإنترنت، بيانات تتبع الوصول: 3 أشهر
                </li>
              </ul>
              <p className="mt-4">
                السجلات بموجب &apos;قانون ضريبة القيمة المضافة&apos;:
              </p>
              <ul className="mt-2 list-disc ps-6">
                <li>
                  المعلومات المتعلقة بتفاصيل المعاملات مثل الفواتير والإيصالات: 5
                  سنوات
                </li>
              </ul>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 3: تقديم المعلومات الشخصية إلى أطراف ثالثة
              </h2>
              <p className="mt-3">
                لا تقدم الشركة عادة المعلومات الشخصية لأصحاب المعلومات إلى أطراف
                ثالثة. ومع ذلك، تنطبق الاستثناءات في الحالات التالية:
              </p>
              <h3 className="mt-4 font-semibold text-slate-900">
                التقديم إلى جهة التوظيف
              </h3>
              <p className="mt-2">
                نظرًا لطبيعة مقابلات الذكاء الاصطناعي، قد يتم تقديم نتائج المقابلات
                التي أجراها صاحب المعلومات إلى جهة التوظيف المعنية لأغراض معالجة
                التوظيف.
              </p>
              <ul className="mt-3 list-disc space-y-2 ps-6">
                <li>
                  <span className="font-semibold text-slate-900">المستلم:</span> جهة
                  التوظيف التي دعت صاحب المعلومات
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    الغرض من التقديم:
                  </span>{" "}
                  إجراء معالجة التوظيف (التقييم/المراجعة)، والاطلاع على النتائج
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    العناصر المقدمة:
                  </span>{" "}
                  جميع مقاطع الفيديو والصوت والنصوص (بما في ذلك النصوص
                  المكتوبة/الملخصات) والأسئلة/التقييمات والسجلات وغيرها التي تم
                  إنشاؤها وجمعها أثناء عملية مقابلة الذكاء الاصطناعي
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    فترة الاحتفاظ والاستخدام:
                  </span>{" "}
                  بناءً على معايير تشغيل التوظيف لجهة التوظيف. ومع ذلك، تقتصر فترة
                  الاحتفاظ والعرض داخل منصة الخدمة على سنة واحدة كحد أقصى من تاريخ
                  اكتمال المقابلة، وسيتم إتلاف البيانات تلقائيًا بعد الفترة.
                </li>
              </ul>
              <h3 className="mt-6 font-semibold text-slate-900">
                التقديم بناءً على القوانين
              </h3>
              <p className="mt-2">
                يجوز تقديمها وفقًا للقانون، مثل الطلبات المشروعة من جهات التحقيق.
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 4: الاستعانة بمصادر خارجية لمعالجة المعلومات الشخصية
              </h2>
              <p className="mt-3">
                تقوم الشركة بالاستعانة بمصادر خارجية لمعالجة المعلومات الشخصية على
                النحو التالي لضمان سير العمل بسلاسة:
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[42rem] border-collapse text-start text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-3 font-semibold text-slate-900">
                        شركة المتعهد
                      </th>
                      <th className="p-3 font-semibold text-slate-900">
                        المهام المستعان بها وعنوان البيانات
                      </th>
                      <th className="p-3 font-semibold text-slate-900">
                        العناصر التي تم جمعها/نقلها
                      </th>
                      <th className="p-3 font-semibold text-slate-900">
                        فترة الاحتفاظ والاستخدام
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100 align-top">
                      <td className="p-3">Microsoft (Azure)</td>
                      <td className="p-3">
                        تشغيل الخادم، تخزين البيانات، الأمان/النسخ الاحتياطي، إلخ /
                        كوريا الجنوبية
                      </td>
                      <td className="p-3">
                        اسم المتقدم، بريده الإلكتروني، فيديو المقابلة، الصوت
                      </td>
                      <td className="p-3">
                        حتى سنة واحدة من تاريخ مقابلة الذكاء الاصطناعي
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-3">Agora</td>
                      <td className="p-3">
                        نقل بث الفيديو/الصوت في الوقت الفعلي لمقابلات الذكاء
                        الاصطناعي / لا يتم تخزينه
                      </td>
                      <td className="p-3">
                        بيانات فيديو وصوت المقابلة في الوقت الفعلي
                      </td>
                      <td className="p-3">لا يتم تخزينها</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                تحدد الشركة المسائل المتعلقة بحظر معالجة المعلومات الشخصية خارج
                غرض المهام المستعان بها، والتدابير الوقائية التقنية والإدارية،
                والقيود على إعادة الاستعانة بمصادر خارجية، وإدارة المتعهدين
                والإشراف عليهم، والمسؤولية عن الأضرار، إلخ، في وثائق مثل العقود عند
                إبرام عقود الاستعانة بمصادر خارجية، وتشرف على ما إذا كان المتعهد
                يعالج المعلومات الشخصية بأمان.
              </p>
              <p className="mt-3">
                في حال حدوث تغييرات في محتوى المهام المستعان بها أو المتعهدين، سنكشف
                عن ذلك على الفور من خلال سياسة معالجة المعلومات الشخصية الحالية.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                تقوم الشركة بنقل المعلومات الشخصية إلى الخارج على النحو التالي:
              </p>
              <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[56rem] border-collapse text-start text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-2 font-semibold text-slate-900">
                        اسم الشركة
                      </th>
                      <th className="p-2 font-semibold text-slate-900">
                        الدولة المنقول إليها
                      </th>
                      <th className="p-2 font-semibold text-slate-900">
                        تاريخ وطريقة النقل
                      </th>
                      <th className="p-2 font-semibold text-slate-900">
                        معلومات الاتصال بمدير المعلومات
                      </th>
                      <th className="p-2 font-semibold text-slate-900">
                        عناصر المعلومات الشخصية المنقولة
                      </th>
                      <th className="p-2 font-semibold text-slate-900">غرض النقل</th>
                      <th className="p-2 font-semibold text-slate-900">
                        فترة الاحتفاظ بالمعلومات الشخصية
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="p-2">Google Inc</td>
                      <td className="p-2">الولايات المتحدة</td>
                      <td className="p-2">
                        النقل عبر الشبكة عند استخدام خدمات الزوار على الموقع
                      </td>
                      <td className="p-2">
                        <a
                          href="mailto:googlekorea@google.com"
                          className="text-purple-deep hover:underline"
                        >
                          googlekorea@google.com
                        </a>
                      </td>
                      <td className="p-2">
                        معرف ملف تعريف الارتباط، عنوان IP، بيانات زيارة ونشاط
                        الويب/التطبيق، معلومات الجهاز
                      </td>
                      <td className="p-2">
                        للقياس الإحصائي للتفاعلات التي يقوم بها المستخدمون على الموقع
                      </td>
                      <td className="p-2">14 شهرًا</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 5: حقوق وواجبات أصحاب المعلومات والممثلين القانونيين وطرق
                ممارستها
              </h2>
              <p className="mt-3">
                يمكن لصاحب المعلومات ممارسة حقوق الوصول إلى المعلومات الشخصية
                وتصحيحها وحذفها وطلب تعليق معالجتها في أي وقت ضد الشركة.
              </p>
              <p className="mt-3">
                يمكن ممارسة الحقوق بموجب الفقرة 1 كتابيًا أو عبر البريد الإلكتروني
                وفقًا للمادة 41، الفقرة 1 من مرسوم تنفيذ &apos;قانون حماية المعلومات
                الشخصية&apos;، وستستجيب الشركة دون تأخير.
              </p>
              <p className="mt-3">
                إذا طلب صاحب المعلومات تصحيح أو حذف الأخطاء في المعلومات الشخصية،
                فلن تستخدم الشركة أو تقدم المعلومات الشخصية ذات الصلة حتى اكتمال
                التصحيح أو الحذف.
              </p>
              <p className="mt-3">
                يمكن أيضًا ممارسة الحقوق المذكورة في الفقرة 1 من خلال ممثل قانوني أو
                شخص مفوض. في هذه الحالة، يجب تقديم توكيل وفقًا لنموذج الملحق رقم 11
                من اللوائح التنفيذية لـ &apos;قانون حماية المعلومات الشخصية&apos;.
              </p>
              <p className="mt-3">
                يجوز تقييد طلبات الوصول وتعليق معالجة المعلومات الشخصية بموجب المادة
                35، الفقرة 4، والمادة 37، الفقرة 2 من &apos;قانون حماية المعلومات
                الشخصية&apos;.
              </p>
              <p className="mt-3">
                لا يمكن تقديم طلبات تصحيح وحذف المعلومات الشخصية إذا كانت المعلومات
                الشخصية ذات الصلة محددة كهدف للجمع في قوانين أخرى.
              </p>
              <p className="mt-3">
                تتحقق الشركة مما إذا كان الشخص الذي يقدم طلبًا يتعلق بالوصول أو
                التصحيح أو الحذف أو تعليق المعالجة هو صاحب المعلومات أو ممثل شرعي.
              </p>
              <h3 className="mt-6 font-semibold text-slate-900">
                بشأن التحليل الآلي باستخدام تكنولوجيا الذكاء الاصطناعي (AI)
              </h3>
              <p className="mt-2">
                تقوم الشركة بتشغيل نظام يحلل إجابات المتقدمين باستخدام الذكاء
                الاصطناعي وينشئ تقارير التحليل. يمكن لصاحب المعلومات طلب توضيحات
                ومراجعات بخصوص القرارات الآلية التي تؤثر بشكل كبير على حقوقهم أو
                التزاماتهم.
              </p>
              <p className="mt-3">
                تقدم خدمات الشركة تقارير تحليل الذكاء الاصطناعي فقط كمواد تكميلية
                لاتخاذ قرارات التوظيف، ويتم اتخاذ القرار النهائي بشأن القبول في عملية
                التوظيف من خلال تدخل مسؤول التوظيف (بشري). لذلك، قد لا يشكل ذلك
                &apos;صنع قرار آلي بالكامل&apos; بدون تدخل بشري وفقًا للمادة 37-2 من
                &apos;قانون حماية المعلومات الشخصية&apos;، وقد يتم تقييد ممارسة
                الحق في رفض مثل هذه القرارات الآلية.
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 6: عناصر المعلومات الشخصية التي تتم معالجتها
              </h2>
              <p className="mt-3">
                تعالج الشركة العناصر التالية من المعلومات الشخصية:
              </p>
              <h3 className="mt-4 font-semibold text-slate-900">
                التسجيل والإدارة
              </h3>
              <p className="mt-2">
                إلزامي: الاسم، كلمة المرور، عنوان البريد الإلكتروني، اسم الشركة
              </p>
              <h3 className="mt-4 font-semibold text-slate-900">
                الاستخدام للتسويق والإعلان
              </h3>
              <p className="mt-2">
                عناصر إلزامية: الاسم، عنوان البريد الإلكتروني
              </p>
              <h3 className="mt-4 font-semibold text-slate-900">
                معلومات تقديم المتقدم والمقابلة
              </h3>
              <p className="mt-2">
                عناصر إلزامية: الاسم، عنوان البريد الإلكتروني، بيانات فيديو وصوت
                مقابلة الذكاء الاصطناعي، نص الإجابة، السيرة الذاتية
              </p>
              <p className="mt-4">
                أثناء استخدام خدمات الإنترنت، قد يتم إنشاء وجمع المعلومات الشخصية
                التالية تلقائيًا:
              </p>
              <p className="mt-2">
                عنوان IP، ملفات تعريف الارتباط (الكوكيز)، عنوان MAC، سجلات استخدام
                الخدمة، سجل الزيارة، سجلات الاستخدام السيئ، معلومات الجهاز (نظام
                التشغيل، معلومات المتصفح)، بيانات سلوك Google Analytics
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 7: إتلاف المعلومات الشخصية
              </h2>
              <p className="mt-3">
                ستقوم الشركة بإتلاف المعلومات الشخصية دون تأخير عندما تصبح غير ضرورية
                بسبب انتهاء فترة الاحتفاظ أو تحقيق غرض المعالجة.
              </p>
              <p className="mt-3">
                إذا انتهت الفترة المتفق عليها من قبل صاحب المعلومات أو تحقق غرض
                المعالجة، لكن الشركة ملزمة بموجب قوانين أخرى بمواصلة الاحتفاظ
                بالمعلومات الشخصية، فسيتم نقلها إلى قاعدة بيانات منفصلة (DB) أو
                الاحتفاظ بها في موقع مختلف.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                إجراءات وطرق إتلاف المعلومات الشخصية هي كما يلي:
              </p>
              <p className="mt-2">
                إجراءات الإتلاف: تختار الشركة المعلومات الشخصية التي حدث سبب إتلافها
                وتتلفها بموافقة الشخص المسؤول عن حماية المعلومات الشخصية.
              </p>
              <p className="mt-3 font-semibold text-slate-900">طرق الإتلاف:</p>
              <ul className="mt-2 list-disc space-y-3 ps-6">
                <li>
                  تنسيق الملفات الإلكترونية: تتلف الشركة المعلومات الشخصية
                  المسجلة/المخزنة في البنية التحتية السحابية باستخدام تنسيق منخفض
                  المستوى أو طريقة إتلاف تقنية مكافئة تجعل السجلات غير قابلة
                  للاسترداد.
                </li>
                <li>
                  المستندات الورقية: يتم إتلاف المعلومات الشخصية المسجلة/المخزنة في
                  المستندات الورقية عن طريق التقطيع أو الحرق.
                </li>
              </ul>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 8: التدابير الأمنية للمعلومات الشخصية
              </h2>
              <p className="mt-3">
                تتخذ الشركة التدابير التالية لضمان أمن المعلومات الشخصية:
              </p>
              <ul className="mt-3 list-disc space-y-3 ps-6">
                <li>
                  وضع وتشغيل خطة إدارة داخلية للمعلومات الشخصية، بما في ذلك تعيين
                  مسؤول لحماية المعلومات الشخصية وتنظيم وتشغيل حماية المعلومات
                  الشخصية، والتحقق سنويًا مما إذا كانت الخطة الداخلية يتم تنفيذها
                  بشكل صحيح.
                </li>
                <li>
                  التحكم في الوصول إلى المعلومات الشخصية من خلال إدارة حقوق الوصول
                  إلى نظام قاعدة البيانات الذي يعالج المعلومات الشخصية ومنع الوصول
                  غير المصرح به من الداخل والخارج.
                </li>
                <li>
                  يقوم مسؤولو معالجة المعلومات الشخصية بتخزين وإدارة سجلات الوصول
                  إلى نظام معالجة المعلومات الشخصية وفحص سجلات الوصول بانتظام لمنع
                  سوء استخدام المعلومات الشخصية أو فقدانها أو تزويرها أو تغييرها.
                  بالإضافة إلى ذلك، لضمان عدم تغيير سجلات الوصول لمسؤولي معالجة
                  المعلومات الشخصية أو سرقتها أو فقدانها، يتم تخزين سجلات الوصول هذه
                  بشكل آمن.
                </li>
                <li>
                  فصل مواقع التخزين الفعلية للمعلومات الشخصية وإنشاء وإجراءات التحكم
                  في الوصول إليها.
                </li>
              </ul>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 9: تركيب وتشغيل ورفض أجهزة الجمع التلقائي للمعلومات الشخصية
              </h2>
              <p className="mt-3">
                تستخدم الشركة &apos;ملفات تعريف الارتباط (الكوكيز)&apos; لتخزين
                واسترجاع معلومات الاستخدام من أجل تقديم خدمات مخصصة.
              </p>
              <p className="mt-3">
                ملفات تعريف الارتباط هي كميات صغيرة من المعلومات ترسلها خادم الويب
                (http) إلى متصفح كمبيوتر المستخدم ويتم تخزينها أحيانًا على القرص
                الصلب لجهاز الكمبيوتر الخاص بالمستخدم.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">
                  الغرض من استخدام ملفات تعريف الارتباط:
                </span>{" "}
                تُستخدم لفهم أنماط الزيارة والاستخدام لكل خدمة وموقع يزوره
                المستخدمون، وعبارات البحث الشائعة، والوصول الآمن، وتحليل سلوك
                الاستخدام عبر Google Analytics، وتقديم معلومات محسنة للمستخدمين
                وتحسين جودة الخدمة.
              </p>
              <p className="mt-4">
                <span className="font-semibold text-slate-900">
                  تركيب ملفات تعريف الارتباط وتشغيلها ورفضها:
                </span>{" "}
                للمستخدمين الحق في اختيار قبول ملفات تعريف الارتباط. يمكنهم رفض
                تخزين ملفات تعريف الارتباط من خلال قائمة الإعدادات أعلى متصفح
                الويب.
              </p>
              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[28rem] border-collapse text-start text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-3 font-semibold text-slate-900">
                        نوع المتصفح
                      </th>
                      <th className="p-3 font-semibold text-slate-900">المتصفح</th>
                      <th className="p-3 font-semibold text-slate-900">الإعدادات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="p-3">متصفح ويب</td>
                      <td className="p-3">Chrome</td>
                      <td className="p-3">
                        الإعدادات {">"} الخصوصية والأمان {">"} مسح بيانات التصفح
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3">متصفح ويب</td>
                      <td className="p-3">Edge</td>
                      <td className="p-3">
                        الإعدادات {">"} ملفات تعريف الارتباط وأذونات الموقع {">"}{" "}
                        إدارة وحذف ملفات تعريف الارتباط وبيانات الموقع
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3">جوال</td>
                      <td className="p-3">Chrome</td>
                      <td className="p-3">
                        الإعدادات {">"} الخصوصية والأمان {">"} مسح بيانات التصفح
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">جوال</td>
                      <td className="p-3">Safari</td>
                      <td className="p-3">
                        الإعدادات {">"} Safari {">"} متقدم {">"} حظر جميع ملفات تعريف
                        الارتباط
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 10: مسؤول حماية المعلومات الشخصية
              </h2>
              <p className="mt-3">
                تعين الشركة مسؤولاً لحماية المعلومات الشخصية للإشراف على معالجة
                المعلومات الشخصية ومعالجة الشكاوى والأضرار المتعلقة بمعالجة
                المعلومات الشخصية على النحو التالي:
              </p>
              <ul className="mt-3 list-disc space-y-2 ps-6">
                <li>
                  <span className="font-semibold text-slate-900">المسؤول:</span> تشوي
                  جاي-وونغ (Choi Jae-woong)
                </li>
                <li>
                  <span className="font-semibold text-slate-900">المنصب:</span> CISO
                  / CPO
                </li>
                <li>
                  <span className="font-semibold text-slate-900">المستوى:</span>{" "}
                  الرئيس التنفيذي (CEO)
                </li>
                <li>
                  <span className="font-semibold text-slate-900">جهة الاتصال:</span>{" "}
                  <a
                    href="mailto:privacy@supercoder.co"
                    className="text-purple-deep hover:underline"
                  >
                    privacy@supercoder.co
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 11: سبل الانتصاف من انتهاكات الحقوق
              </h2>
              <p className="mt-3">
                يمكن لأصحاب المعلومات التقدم بطلب لحل النزاعات أو الاستشارة إلى لجنة
                التوفيق في نزاعات المعلومات الشخصية، أو مركز الإبلاغ عن انتهاكات
                المعلومات الشخصية التابع لهيئة الإنترنت والأمن الكورية، إلخ، للحصول
                على تعويض عن انتهاك المعلومات الشخصية. للتقارير أو الاستفسارات
                الأخرى حول انتهاك المعلومات الشخصية، يرجى الاتصال بالمنظمات أدناه:
              </p>
              <ul className="mt-3 list-disc space-y-3 ps-6">
                <li>
                  مركز الإبلاغ عن انتهاكات المعلومات الشخصية (تديره هيئة الإنترنت
                  والأمن الكورية): (بدون رمز المنطقة) 118 -{" "}
                  <a
                    href="https://privacy.kisa.or.kr"
                    className="text-purple-deep hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy.kisa.or.kr
                  </a>
                </li>
                <li>
                  لجنة التوفيق في نزاعات المعلومات الشخصية: (بدون رمز المنطقة)
                  1833-6972 -{" "}
                  <a
                    href="https://www.kopico.go.kr"
                    className="text-purple-deep hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kopico.go.kr
                  </a>
                </li>
                <li>
                  مكتب المدعي العام الأعلى: (بدون رمز المنطقة) 1301 -{" "}
                  <a
                    href="https://www.spo.go.kr"
                    className="text-purple-deep hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.spo.go.kr
                  </a>
                </li>
                <li>
                  وكالة الشرطة: (بدون رمز المنطقة) 182 -{" "}
                  <a
                    href="https://ecrm.police.go.kr"
                    className="text-purple-deep hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ecrm.police.go.kr
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-8">
              <h2 className="text-xl font-bold text-slate-900">
                المادة 12: التغييرات في سياسة الخصوصية
              </h2>
              <p className="mt-3">
                تدخل سياسة الخصوصية هذه حيز التنفيذ من تاريخ التنفيذ، وفي حالة وجود
                أي إضافات أو حذف أو تصحيحات للتغييرات في القوانين والسياسات، سيتم
                الإخطار بها من خلال الإعلانات.
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                تدخل هذه السياسة حيز التنفيذ اعتبارًا من 29 يناير 2026.
              </p>
            </div>
          </section>
        </article>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href="/terms"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            شروط الخدمة للشركات
          </Link>
          <Link
            href="/terms-candidates"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            شروط الخدمة للمرشحين
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
