import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشروط والأحكام — Supercoder AI",
  description: "الشروط والأحكام لخدمات Supercoder AI للتوظيف المدعوم بالذكاء الاصطناعي.",
};

export default function TermsPage() {
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
            href="/privacy"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            سياسة الخصوصية
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          الشروط والأحكام — Supercoder AI
        </h1>
        <p className="mb-8 text-sm text-slate-500">آخر تحديث: يونيو 2025</p>

        <section className="space-y-6 text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">1. التعريفات</h2>
          <ul className="list-disc ps-6">
            <li>
              <strong>الشركة:</strong> Second Team Inc. (تعمل تجاريًا باسم
              &quot;Supercoder&quot;) ويُشار إليها بـ (&quot;نحن/لنا/لدينا&quot;).
            </li>
            <li>
              <strong>الخدمات:</strong> الموقع والتطبيقات والمنتجات والواجهات
              وواجهات البرمجة (APIs) وأي خدمات مرتبطة بالتوظيف المدعوم بالذكاء
              الاصطناعي.
            </li>
            <li>
              <strong>العميل/صاحب العمل:</strong> الجهة التجارية التي تستخدم
              الخدمات لتقييم المرشحين (B2B).
            </li>
            <li>
              <strong>المرشح:</strong> الشخص الذي تتم مقابلته/تقييمه عبر
              الخدمات.
            </li>
            <li>
              <strong>بيانات المرشح:</strong> أي بيانات شخصية أو مهنية تخص
              المرشح بما في ذلك السيرة الذاتية، الملفات، الإجابات، التسجيلات،
              النصوص، التقارير.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">2. القبول والالتزام</h2>
          <p>
            بدخولك أو استخدامك للخدمات فإنك تقر بأنك قرأت وفهمت وتوافق على
            الالتزام بهذه الشروط. إذا لم توافق، يجب التوقف فورًا عن استخدام
            الخدمات.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. نطاق الاستخدام (B2B)</h2>
          <p>
            الخدمات مخصصة للاستخدام التجاري المؤسسي (B2B). يجب أن يكون عمر
            المستخدم 18 عامًا فأكثر. أنت مسؤول عن التأكد من أن استخدامك للخدمات
            قانوني في نطاق ولايتك القضائية، بما في ذلك أنظمة العمل وحماية البيانات
            والخصوصية.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            4. طبيعة الخدمة وحدودها
          </h2>
          <p>
            الخدمات تقدّم أدوات دعم قرار (Decision Support) مثل: مقابلات فيديو،
            تقييمات، تقارير مهارات، مؤشرات نزاهة، وملخصات. لا نضمن أن مخرجات
            الذكاء الاصطناعي خالية من الأخطاء بنسبة 100%، ويظل قرار التوظيف
            النهائي مسؤولية العميل.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            5. حسابات المستخدمين والصلاحيات
          </h2>
          <p>
            قد يتطلب استخدام بعض الخدمات إنشاء حساب. أنت مسؤول عن: سرية بيانات
            الدخول؛ جميع الأنشطة التي تتم عبر حسابك؛ الالتزام بنطاق الصلاحيات
            (RBAC) وسياسات الشركة الداخلية. نحتفظ بحق تعليق/إيقاف الحسابات عند
            الاشتباه بسوء استخدام أو خرق أمني أو مخالفة لهذه الشروط.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            6. التزامات العميل (صاحب العمل)
          </h2>
          <ul className="list-disc ps-6">
            <li>
              الحصول على أي موافقات/أسس نظامية مطلوبة لمعالجة بيانات المرشحين
              (حسب PDPL أو أي نظام مطبق).
            </li>
            <li>
              عدم استخدام الخدمات لأغراض غير قانونية أو تمييزية أو مخالفة
              لأنظمة العمل.
            </li>
            <li>
              استخدام مخرجات الذكاء الاصطناعي كجزء من عملية تقييم شاملة وعدم
              الاعتماد عليها وحدها عند الحاجة.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">
            7. التسجيلات والمراقبة والنزاهة
          </h2>
          <p>
            قد تتضمن الخدمات تسجيل فيديو/صوت/مشاركة شاشة ووسائل نزاهة (Proctoring)
            بهدف: إصدار التقارير؛ منع الاحتيال؛ توثيق العملية عند الطلب. قد يتم
            إخطار المرشح داخل تجربة المقابلة بوجود التسجيل وآليات النزاهة
            وسيُطلب منه الإقرار/الموافقة حيث يلزم.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            8. حماية البيانات وعدم تدريب النماذج على بيانات العملاء (مهم للتوافق)
          </h2>
          <p>
            بيانات العملاء/المرشحين (بما فيها التسجيلات والنصوص والتقارير) لا
            تُستخدم افتراضيًا لتدريب أو تحسين نماذج الذكاء الاصطناعي أو بناء
            مجموعات بيانات. لا يتم ذلك إلا بموافقة صريحة ومسبقة وبموجب اتفاق
            كتابي منفصل (مثل DPA/ملحق تدريب بيانات/موافقة) يحدد النطاق والغرض
            والضوابط. قد نستخدم بيانات مجهولة/مجمعة (غير قابلة لإعادة التعرف)
            لأغراض إحصائية وتحسين أداء المنصة دون إدخال بيانات شخصية قابلة
            للتحديد في تدريب النماذج.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            9. مزودو الخدمة من أطراف ثالثة
          </h2>
          <p>
            قد نستعين بمزودين (استضافة، تحليلات، بريد، أمن، مزود ذكاء اصطناعي
            للمعالجة) لتنفيذ الخدمات. يتم تقييدهم تعاقديًا بحماية البيانات وعدم
            استخدامها لأغراضهم المستقلة حيث ينطبق.
          </p>

          <h2 className="text-xl font-bold text-slate-900">10. الملكية الفكرية</h2>
          <p>
            كل محتوى المنصة، الكود، التصاميم، العلامات، الشعارات، قواعد البيانات،
            ووظائف النظام ملك للشركة أو مرخّص لها. لا يجوز نسخ أو إعادة نشر أو
            إعادة بيع أي جزء من الخدمات دون إذن خطي.
          </p>

          <h2 className="text-xl font-bold text-slate-900">11. الاستخدامات المحظورة</h2>
          <p>يُحظر عليك:</p>
          <ul className="list-disc ps-6">
            <li>استخراج البيانات بشكل منهجي لإنشاء قواعد بيانات دون إذن.</li>
            <li>التحايل على أنظمة الأمن أو النزاهة أو تعطيلها.</li>
            <li>استخدام الخدمات لأغراض احتيالية أو غير قانونية.</li>
            <li>رفع محتوى ينتهك حقوق الغير أو يخرق الخصوصية.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">
            12. الرسوم والدفع (إن وُجدت)
          </h2>
          <p>
            قد تكون بعض الميزات مدفوعة/اشتراكية. في حال وجود اشتراك: يلتزم
            العميل بدفع الرسوم وفق الخطة؛ الإلغاء يتم من خلال الحساب/العقد
            التجاري؛ ما لم يُنص خلاف ذلك بالعقد التجاري: لا يوجد استرداد
            للمدفوعات بعد بدء فترة الاشتراك.
          </p>

          <h2 className="text-xl font-bold text-slate-900">13. الإنهاء</h2>
          <p>
            يحق لنا تعليق أو إنهاء وصولك للخدمات عند: خرق الشروط؛ مخاطر أمنية؛
            استخدام غير مشروع؛ طلب نظامي من جهة مختصة.
          </p>

          <h2 className="text-xl font-bold text-slate-900">14. إخلاء المسؤولية</h2>
          <p>
            الخدمات مقدمة &quot;كما هي&quot; و&quot;حسب التوفر&quot;. إلى أقصى حد
            يسمح به القانون، نخلي مسؤوليتنا عن الضمانات الضمنية (الملاءمة لغرض
            معين، عدم الانتهاك، إلخ).
          </p>

          <h2 className="text-xl font-bold text-slate-900">15. حدود المسؤولية</h2>
          <p>
            لا تتحمل الشركة مسؤولية أي أضرار غير مباشرة أو تبعية أو خاصة ناتجة
            عن استخدام الخدمات، إلى أقصى حد يسمح به القانون.
          </p>

          <h2 className="text-xl font-bold text-slate-900">16. التعويض</h2>
          <p>
            يوافق المستخدم/العميل على تعويض الشركة عن أي مطالبات تنشأ عن: محتوى
            يرفعه المستخدم؛ إساءة الاستخدام؛ خرق القوانين أو حقوق الغير.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            17. أولوية الاتفاقيات التجارية
          </h2>
          <p>
            إذا كان بينك وبين الشركة اتفاق منفصل (مثل اتفاقية خدمات/أمر
            شراء/SLA/DPA)، فتسود أحكام ذلك الاتفاق بقدر تعارضه وضمن نطاقه.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            18. القانون الحاكم وحل النزاعات
          </h2>
          <p>
            تخضع هذه الشروط لقوانين جمهورية كوريا، وتكون المحاكم المختصة في
            جمهورية كوريا هي المختصة بنظر النزاعات، ما لم ينص عقد تجاري منفصل
            على خلاف ذلك.
          </p>

          <h2 className="text-xl font-bold text-slate-900">19. التواصل</h2>
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

        <section
          className="mt-16 space-y-6 border-t border-slate-200 pt-12 text-slate-700"
          aria-labelledby="enterprise-terms-heading"
        >
          <h2
            id="enterprise-terms-heading"
            className="text-2xl font-bold text-slate-900"
          >
            شروط الخدمة لعملاء المؤسسات (Supercoder)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">المادة 1. الغرض</h3>
              <p className="mt-2">
                تهدف هذه الشروط والأحكام إلى تحديد الحقوق والواجبات والمسؤوليات
                بين شركة Second Team Co., Ltd. (ويشار إليها فيما بعد بـ
                &quot;الشركة&quot;) والشركات المتعاقدة (ويشار إليها فيما بعد بـ
                &quot;الأعضاء&quot;) فيما يتعلق باستخدام خدمة المقابلات المعتمدة
                على الذكاء الاصطناعي (ويشار إليها فيما بعد بـ &quot;الخدمة&quot;)
                المقدمة من قبل الشركة.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 2. تعريف المصطلحات
              </h3>
              <h4 className="mt-3 font-semibold text-slate-900">1) التعريفات</h4>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>
                  <strong>الخدمة:</strong> تشير إلى جميع الوظائف الإضافية اللازمة
                  للمقابلات بالذكاء الاصطناعي، بما في ذلك إنشاء الأسئلة، جمع
                  الإجابات، تقديم تقارير التحليل، وتشغيل عملية التوظيف التي تقدمها
                  الشركة.
                </li>
                <li>
                  <strong>العضو:</strong> يشير إلى العملاء من الشركات الذين
                  يوافقون على هذه الشروط والأحكام ويبرمون اتفاقية خدمة مع الشركة
                  لاستخدام الخدمة.
                </li>
                <li>
                  <strong>المشروع:</strong> يشير إلى وحدة مقابلة الذكاء الاصطناعي
                  التي ينشئها العضو لإعلان توظيف محدد.
                </li>
                <li>
                  <strong>المسؤول:</strong> يشير إلى ممثل العضو الذي يمتلك
                  صلاحيات تشغيلية مثل إنشاء المشروع/التفويض/الدفع.
                </li>
                <li>
                  <strong>المتقدم:</strong> يشير إلى الفرد المشارك في عملية
                  التوظيف الخاصة بالعضو.
                </li>
                <li>
                  <strong>المقابلة بالذكاء الاصطناعي:</strong> العملية التي يقوم
                  فيها نظام الشركة بإنشاء وعرض الأسئلة وجمع الردود وتقديم تقارير
                  التحليل.
                </li>
                <li>
                  <strong>بيانات المقابلة:</strong> جميع الفيديوهات والتسجيلات
                  الصوتية والنصوص والسجلات الناتجة عن المقابلة.
                </li>
                <li>
                  <strong>الخدمة المدفوعة:</strong> خدمات تتطلب رسوم وتشمل خطط
                  الاشتراك.
                </li>
                <li>
                  <strong>الرصيد (Credit):</strong> الحد الأقصى للاستخدام خلال
                  فترة الاشتراك.
                </li>
                <li>
                  <strong>الانتهاء:</strong> انتهاء صلاحية الرصيد غير المستخدم دون
                  ترحيل.
                </li>
              </ul>
              <h4 className="mt-4 font-semibold text-slate-900">2) أحكام عامة</h4>
              <p className="mt-2">
                تخضع التعريفات للقوانين ذات الصلة أو الأعراف التجارية.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 3. نشر وتعديل الشروط
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يتم نشر الشروط على موقع الخدمة.</li>
                <li>يجوز تعديلها مع إشعار مسبق.</li>
                <li>يتم إخطار الأعضاء بالتغييرات الجوهرية مسبقًا.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 4. تفسير الشروط
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>
                  يمكن إبرام اتفاقيات منفصلة، وتكون لها الأولوية عند التعارض.
                </li>
                <li>تطبق القوانين ذات الصلة على ما لم يرد في هذه الشروط.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 5. إبرام اتفاقية الخدمة
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>
                  يتم إبرام الاتفاق عند الموافقة وإتمام التسجيل أو الشراء.
                </li>
                <li>يجوز للشركة رفض الطلب لأسباب تقنية أو تشغيلية.</li>
                <li>يتحمل العضو مسؤولية تحديث بياناته.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 6. تقديم المستندات
              </h3>
              <p className="mt-2">
                يجوز للشركة طلب مستندات رسمية مثل السجل التجاري أو تفويض
                الصلاحيات.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 7. حماية المعلومات الشخصية
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>تتم المعالجة وفق سياسة الخصوصية والقوانين.</li>
                <li>يلتزم الأعضاء بالحصول على الموافقات اللازمة.</li>
                <li>تستخدم البيانات فقط لأغراض التوظيف.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 8. إسناد المعالجة
              </h3>
              <p className="mt-2">
                يجوز للشركة إسناد معالجة البيانات لطرف ثالث مع الإشراف عليه.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 9. الحسابات وكلمات المرور
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يجب الحفاظ على سرية الحساب.</li>
                <li>لا يجوز مشاركة الحساب.</li>
                <li>يتحمل العضو أي أضرار نتيجة سوء الاستخدام.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 10. الإشعارات
              </h3>
              <p className="mt-2">
                يتم التواصل عبر البريد الإلكتروني أو داخل النظام.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 11. تقديم وتعليق الخدمة
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>توفر الشركة خدمات المقابلات والتحليل.</li>
                <li>يجوز تعليق الخدمة مؤقتًا لأسباب تقنية.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 12. خدمة المقابلات بالذكاء الاصطناعي
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يمكن إنشاء وتعديل الأسئلة.</li>
                <li>يتم تسجيل المقابلات وتقديم تقارير.</li>
                <li>التقارير مرجعية فقط وليست قرارًا نهائيًا.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 13. تعديل الخدمة
              </h3>
              <p className="mt-2">يجوز تعديل الخدمة مع إشعار مسبق.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 14. المعلومات والإعلانات
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يمكن عرض إشعارات أو تحديثات.</li>
                <li>قد يتم عرض إعلانات طرف ثالث.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 15. الملكية الفكرية
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>تعود حقوق الشركة لمحتواها.</li>
                <li>تعود حقوق محتوى العضو له.</li>
                <li>يمنح العضو ترخيص استخدام محدود للشركة.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 16. قيود الاستخدام
              </h3>
              <p className="mt-2">
                يجوز تقييد الاستخدام في حالات إساءة الاستخدام أو الاختراق.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 17. إنهاء الخدمة
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يمكن للعضو إنهاء العقد.</li>
                <li>تبقى بعض الالتزامات سارية بعد الإنهاء.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">المادة 18. الرسوم</h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يتم تحديد الرسوم وفق الاتفاق.</li>
                <li>يجوز تعديلها مع إشعار مسبق.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 19. الاشتراكات والأرصدة
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يتم منح أرصدة ضمن فترة محددة.</li>
                <li>تنتهي الأرصدة غير المستخدمة دون ترحيل.</li>
                <li>يتم الخصم عند الاستخدام.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">المادة 20. الدفع</h3>
              <p className="mt-2">
                تشمل طرق الدفع التحويل أو البطاقة أو الفاتورة.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">المادة 21. الاسترداد</h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>يمكن الاسترداد خلال 7 أيام في حال عدم الاستخدام.</li>
                <li>لا يتم الاسترداد بعد الاستخدام.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 22. المدفوعات الزائدة
              </h3>
              <p className="mt-2">يتم رد أي مبالغ زائدة.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 23. التزامات الشركة
              </h3>
              <p className="mt-2">
                تلتزم الشركة بتقديم خدمة مستقرة وحماية البيانات.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 24. التزامات الأعضاء
              </h3>
              <p className="mt-2">يلتزم الأعضاء بالقوانين وحماية البيانات.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">المادة 25. التعويض</h3>
              <p className="mt-2">
                يتم التعويض وفق القوانين في حالات الإهمال.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 26. تحديد المسؤولية
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>لا تتحمل الشركة المسؤولية في حالات القوة القاهرة.</li>
                <li>لا تضمن نتائج التوظيف.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                المادة 27. القانون والاختصاص
              </h3>
              <ul className="mt-2 list-disc space-y-2 ps-6">
                <li>تخضع النزاعات لقوانين جمهورية كوريا.</li>
                <li>يتم تحديد المحكمة المختصة وفق القانون.</li>
              </ul>
            </div>

            <p className="border-t border-slate-200 pt-6 text-sm font-semibold text-slate-900">
              تاريخ السريان: 29 يناير 2026
            </p>
          </div>
        </section>

        <div className="mt-16 flex justify-center gap-4">
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
