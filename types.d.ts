type Banner = {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
};

type ServiceItem = {
  id: number;
  icon: string;
  background: string;
  title: string;
  description: string;
};
export type ServicesResponse = {
  banner: Banner;
  our_services: ServiceItem[];
};

type FaqItem = {
  id: number;
  is_active: boolean;
  question: string;
  answer: string;
};
export type FaqResponse = {
  banner: Banner;
  faq: FaqItem[];
};

type Social = {
  id: number;
  key: string;
  value: string;
};
export type SocialResponse = {
  data: Social[];
};

type FeatureItem = {
  id: number;
  icon: string;
  key: string;
  value: string;
};

type whyusdata = {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  is_active: boolean;
  features: FeatureItem[];
};

export type WhyUsResponse = {
  data: whyusdata[];
  status: string;
  message: string;
};

// main page types >>
type mainData = {
  faq: FaqItem[];
  sections: whyusdata[];
  banner: whyusdata;
  footer: string;
};

export type mainPageResponse = {
  status: string;
  message: string;
  data: mainData;
};

// {
//   "status": "success",
//   "message": "تم جلب البيانات بنجاح",
//   "data": {
//       "sections": [
//           {
//               "id": 14,
//               "type": "privacy_policy",
//               "title": "سياسة الخصوصية",
//               "description": "<p><strong>جمع البيانات</strong></p><p> نقوم بجمع البيانات الشخصية عند استخدامك لخدماتنا، بما في ذلك الاسم، البريد الإلكتروني، ورقم الهاتف لضمان تقديم خدمة قانونية فعالة.</p><p><strong>استخدام البيانات</strong></p><p> نستخدم بياناتك لتحسين الخدمات، توفير الاستشارات القانونية، والتواصل معك بشأن القضايا القانونية الخاصة بك.</p><p><strong>مشاركة البيانات</strong></p><p> لا نشارك بياناتك مع أي طرف ثالث إلا عند الضرورة القانونية أو بموافقتك.</p><p><strong>حماية البيانات</strong></p><p> نلتزم باتخاذ الإجراءات الأمنية المناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح.</p><p><strong>حقوق المستخدم</strong></p><p> يحق لك طلب تعديل أو حذف بياناتك الشخصية في أي وقت من خلال التواصل معنا.</p><p><strong>تعديلات السياسة</strong></p><p> نحتفظ بالحق في تعديل سياسة الخصوصية، وأي تغييرات سيتم نشرها على موقعنا.</p><p><strong>القانون الحاكم</strong></p><p> تخضع هذه السياسة لأنظمة المملكة العربية السعودية، وأي نزاع يخضع لاختصاص المحاكم السعودية.</p>",
//               "image": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 22,
//               "type": "terms",
//               "title": "الشروط والأحكام",
//               "description": "<p><strong>قبول الشروط</strong></p><p> باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.</p><p><strong>نطاق الخدمات</strong></p><p> نقدم خدمات الاستشارات القانونية، الترافع، صياغة العقود، وتأسيس الشركات. لا تضمن خدماتنا نتائج القضايا.</p><p><strong>مسؤوليات العميل</strong></p><p> يجب على العميل تقديم معلومات صحيحة وكاملة والوثائق المطلوبة. أي معلومات خاطئة قد تؤدي إلى إنهاء الخدمة.</p><p><strong>السرية</strong></p><p> نحافظ على سرية جميع بيانات العملاء والمسائل القانونية، إلا إذا تطلب القانون غير ذلك.</p><p><strong>الرسوم والمدفوعات</strong></p><p> يتم تحديد الرسوم بناءً على نطاق الخدمة، ويجب دفعها وفقًا للاتفاق. قد يؤدي عدم السداد إلى تعليق الخدمة.</p><p><strong>حدود المسؤولية</strong></p><p> لا نتحمل المسؤولية عن أي خسائر غير مباشرة ناتجة عن الإجراءات القانونية أو قرارات المحاكم.</p><p><strong>تعديل الشروط</strong></p><p> نحتفظ بالحق في تعديل هذه الشروط في أي وقت، ويعتبر استمرار استخدامك للخدمات موافقة على التعديلات.</p><p><strong>القانون الحاكم</strong></p><p> تخضع هذه الشروط للقوانين المعمول بها في المملكة العربية السعودية.</p>",
//               "image": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 23,
//               "type": "main_banner",
//               "title": "حلول قانونية مخصصة لاحتياجاتك الفردية والشركات",
//               "description": "نضع مصالح عملائنا في المقام الأول ونعمل جاهدين لتحقيق أفضل النتائج الممكنة في كل قضية",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/gsdMdk4UTZe0hLSvKdpIPIrriWGEUjr8YXplqERp.jpg",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": [
//                   {
//                       "id": 63,
//                       "key": null,
//                       "value": "فريق من المحامين المعتمدين وذوي الكفاءة",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/6c0HPdihCegwHobAOZJKLfsMfPKIUCXvROAOKAjG.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 64,
//                       "key": null,
//                       "value": "نجاحات قانونية مشهود لها من عملائنا الكرام",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/UGsIFvNCRSSh84nXFpMnOlHM6q5Y1OIIrSfDr1cT.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 65,
//                       "key": null,
//                       "value": "خبرة طويلة في جميع التخصصات القانونية",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/mw90GfzI10ZIS6aqfcZIlqLN1oR7pm5K5DOVMAkx.png",
//                       "is_active": true
//                   }
//               ]
//           },
//           {
//               "id": 24,
//               "type": "about",
//               "title": "من نحن",
//               "description": "تعرف على رؤيتنا ورسالتنا والقيم التي نؤمن بها. اكتشف قصة تأسيس مكتبنا والمسيرة القانونية التي جعلتنا أحد أبرز المكاتب القانونية. نحن نعمل بكل إخلاص لتحقيق العدالة وخدمة عملائنا.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/GvwwZshvBz2Ire5HeCJ7LqbYeeLzH14CD9MIFXPN.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/onqgckEMuf8o4YXFBl4vfqXYDyz7UTjsOA1lBMDD.png",
//               "is_active": true,
//               "features": [
//                   {
//                       "id": 70,
//                       "key": null,
//                       "value": "سرعة استجابة واهتمام شخصي لكل قضية",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/HAxZvcTcKIVN5wB5Hzw3H9Va00fuNHqL7RyWiLRO.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 71,
//                       "key": null,
//                       "value": "دفاع قوي واستراتيجيات قانونية مبتكرة",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/6nTzvjxliNuDC5jOkRd5xPG1DJlid3ZPrBWogmVe.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 72,
//                       "key": null,
//                       "value": "إجراءات قانونية فعالة لحماية حقوقك ومصالحك",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/MbVKf2POHEbZ92tMs15bHoXN5ftA7RBCJXMDIVug.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 73,
//                       "key": null,
//                       "value": "استشارات قانونية دقيقة ومبنية على أحدث القوانين",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/Fe82exBlBRSlueNDpFISzfFJNaFn6k81nhAoiPoN.png",
//                       "is_active": true
//                   }
//               ]
//           },
//           {
//               "id": 25,
//               "type": "why_us",
//               "title": "لماذا نحن",
//               "description": "لأننا نتميز بالخبرة، المصداقية، والالتزام الكامل بخدمة عملائنا. معنا، ستحصل على الحلول القانونية التي تستحقها بخبرة واحترافية لا تضاهى.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/onq0yVoIcuRfHEtNip3hOB9fCehq6CRKESSeKTki.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/FXbfnhkgax5apzG9So6UW8WzliVRO2kPMBBmmigP.png",
//               "is_active": true,
//               "features": [
//                   {
//                       "id": 1,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/WhyUs/v1tVhiQVtQS7dDCTyxnusLWpmCjVcL8NiIf480cn.png",
//                       "key": "فريق من المحامين المعتمين",
//                       "value": "10"
//                   },
//                   {
//                       "id": 3,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/WhyUs/FNFvTpn6SlRNO1AC3EIxDpgIPxwC3rELnd1YAtGS.png",
//                       "key": "سنوات من الخبرة",
//                       "value": "6"
//                   },
//                   {
//                       "id": 4,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/WhyUs/4qVo3X5YbKxItFtSEaT2OgGXxxBxIlnXVkRrALB0.png",
//                       "key": "عملاء كرام سعيدون بالخدمة",
//                       "value": "90"
//                   },
//                   {
//                       "id": 5,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/WhyUs/pjeRtsI9wANgarivqcuI4OibWIE8yUqYslZTHmPv.png",
//                       "key": "نجاحات قانونية مشهود لها من عملائنا الكرام",
//                       "value": "200"
//                   }
//               ]
//           },
//           {
//               "id": 26,
//               "type": "our_services",
//               "title": "خدماتنا",
//               "description": "في \"شبل القانونية\"، نقدم مجموعة شاملة من الخدمات القانونية المصممة خصيصًا لتلبية احتياجات عملائنا. سواء كنت فردًا يبحث عن استشارة قانونية أو شركة تحتاج إلى دعم قانوني متكامل، نحن هنا لنكون شريكك القانوني الموثوق.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/MRK0t6FfMKXgnPb6vGVrG7s7GtaIsi5Qi89biHRP.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/AJoZM9r0vF2b8UEityCwn7r66hLneaQAQHAFpT2y.png",
//               "is_active": true,
//               "features": [
//                   {
//                       "id": 1,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/haDlaAQy8nEkbmC3TmrJYp2PeaXEG24sOr7oQzKy.png",
//                       "background": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/2gKeS6K3ncQ5zASCy6ILjK8vl9QPuAg8kQ3nFHqk.png",
//                       "title": "الترافع و الدفاع",
//                       "description": "يمثل فريقنا المحترف عملاءنا أمام المحاكم ومختلف الجهات القضائية لضمان حقوقهم وتحقيق العدالة."
//                   },
//                   {
//                       "id": 3,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/R750SOhBgryGfCcy1kkSqfF4kNe3E5VNjLosTqdT.png",
//                       "background": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/ME4ju8vBAKqMXTIgMf06cHyFQbQ6h7c1fWgL2EAX.png",
//                       "title": "صياغة العقود",
//                       "description": "نساعد في إعداد وصياغة العقود بجميع أنواعها لضمان حماية حقوقك القانونية وتحقيق مصالحك."
//                   },
//                   {
//                       "id": 4,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/4j9VsTQyF7Sdy68LHuChYCxxjM8O6BfqAdtVI5r1.png",
//                       "background": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/6cCUAyfnMe3sorW0QrLXzHE7CI4AFXiKNjN86UbV.png",
//                       "title": "التمثيل القضائي",
//                       "description": "نقوم بتمثيل عملائنا في جميع الإجراءات القانونية والقضايا المعقدة لضمان سير العملية القانونية بسلاسة وفعالية."
//                   },
//                   {
//                       "id": 5,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/1zb6mNDeMGQ08kg7iAObUyYt2rKN83DIpJegKzgb.png",
//                       "background": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/sMAnyH6MswGhEqCnmIhmRr7qjEsYPNRxnpnnqHbq.png",
//                       "title": "الإستشارات القانونية",
//                       "description": "نقدم استشارات قانونية دقيقة وموثوقة تساعدك على اتخاذ القرارات الصحيحة في مختلف القضايا، سواء الشخصية أو التجارية."
//                   },
//                   {
//                       "id": 6,
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/oSlUVxeFPCDlZv2ZsJ17T5ktSKcYUAAGkt5hrbJF.png",
//                       "background": "https://shebl9.azmy.aait-d.com/storage/images/OurFeature/5yr9veYv7Q0WkQA6yPRGWKe3YVZ3IaFtTsCOFf1E.png",
//                       "title": "تأسيس الشركات",
//                       "description": "نوفر خدمات تأسيس الشركات وإعداد كافة الوثائق القانونية المطلوبة لبدء الأعمال بطريقة صحيحة وقانونية."
//                   }
//               ]
//           },
//           {
//               "id": 27,
//               "type": "contact_info",
//               "title": "تواصل معنا",
//               "description": "نحن هنا لمساعدتك! تواصل معنا عبر الهاتف أو البريد الإلكتروني أو قم بزيارتنا في مكتبنا. يمكنك أيضًا استخدام الخريطة التفاعلية لمعرفة موقعنا بدقة.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/Y8RCnXuTlgV5KflbbYVzMxLUludfepAhaaOW9wvC.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/ContactInfo/5a8mKUtGYyzWEGbG2kSYEuP8kwqB0J4fyK5aOCsW.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 28,
//               "type": "about_banner",
//               "title": "من نحن",
//               "description": "نضع مصالح عملائنا في المقام الأول ونعمل جاهدين لتحقيق أفضل النتائج الممكنة في كل قضية",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/ALOjTHZrAapgBaGeloK6zlWzfA0SRT02Wf6c16Rd.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 29,
//               "type": "goals",
//               "title": "أهدافنا",
//               "description": "شركة شبل القانونية تهدف إلى توفير منصة قانونية متكاملة تتيح للمستخدمين الوصول إلى الخدمات القانونية بسهولة واحترافية. وتشمل الأهداف الرئيسية للشركة ما يلي:",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/CKMFyD4pL5CSzZEki0U3aCKg6qD18kTT2prfPMzN.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/MBh7Sp41eXCZIvtr3cINk9zyketzl4btBDQaPf9S.png",
//               "is_active": true,
//               "features": [
//                   {
//                       "id": 74,
//                       "key": null,
//                       "value": "تمكين المستخدمين من البحث والوصول السريع للخدمات",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/A4ico0ae685beVXfMShnFqfts0DxTEsdc8wCLJ41.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 75,
//                       "key": null,
//                       "value": "تقديم خدمات قانونية متخصصة",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/KirpvjzSfgQAsa0JTiNuErbfzXX7fi3KROoAwkjd.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 76,
//                       "key": null,
//                       "value": "تحقيق تجربة مستخدم سلسة وفعالة",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/XI2lk06kZwfQgRMwBLERMeyEKoRPODr7vQOF53vs.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 77,
//                       "key": null,
//                       "value": "تعزيز التواصل والثقة مع العملاء",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/DV3TRRimgdkHQNUW4q3ZqQ8WDXrkORTQNpcZrIUp.png",
//                       "is_active": true
//                   },
//                   {
//                       "id": 78,
//                       "key": null,
//                       "value": "توفير نظام إدارة متكامل للإدارة",
//                       "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/aKg6y2enXkMgIDubp95DRxi3UIqYuIrHqOvepirm.png",
//                       "is_active": true
//                   }
//               ]
//           },
//           {
//               "id": 30,
//               "type": "core_values",
//               "title": "القيم الأساسية",
//               "description": "الاحترافية والشفافية في التعامل مع العملاء , الابتكار في تقديم الحلول القانونية الرقمية , تقديم خدمات قانونية دقيقة وموثوقة ,  بناء علاقات طويلة الأمد مع العملاء من خلال الدعم المستمر.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/bqahDrknqWUzX4rdkCV8cBeQn95c6AiM5vQg0ccp.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/ZEbC1lqxK8KwmWty7ncMAWJgG2Btjy4oZcY3a4MB.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 31,
//               "type": "our_vision",
//               "title": "رؤيتنا",
//               "description": "رؤيتنا أن تصبح شبل القانونية المنصة الرقمية الرائدة في تقديم الخدمات القانونية في المنطقة من خلال تسهيل الوصول إلى المشورة القانونية وتعزيز الثقة بين العملاء والمحامين.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/v0MRNaCimglcNwBU2LYHQD1HDib1tBZFYlN72hkt.png",
//               "icon": "https://shebl9.azmy.aait-d.com/storage/images/Section/XqELkpwvmWZ0CYa3pbb6e06bKoEsVmLMntJXqN1R.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 32,
//               "type": "qa_banner",
//               "title": "الأسئلة الشائعة",
//               "description": "جميع الأسئلة اللتي تخطر ببالك لتعرف اكثر عن شبل للمحاماة",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/F1PfXabk3J1tUX2w9WtdmVQWtBtpZXIWI7HkpDiD.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 33,
//               "type": "contact_banner",
//               "title": "تواصل معنا",
//               "description": "نحن هنا لمساعدتك! تواصل معنا عبر الهاتف أو البريد الإلكتروني أو قم بزيارتنا في مكتبنا. يمكنك أيضًا استخدام الخريطة التفاعلية لمعرفة موقعنا بدقة.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/TGhSuwTwWLuqqhrfE1r13nukprotL2t1z3r5hvKq.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 34,
//               "type": "terms_banner",
//               "title": "خدمات قانونية موثوقة لحماية حقوقك",
//               "description": "نقدم لك استشارات قانونية دقيقة، دفاعًا قويًا، وصياغة عقود محكمة. مع فريق من المحامين المعتمدين، نضمن لك الحلول القانونية التي تستحقها بكل احترافية.",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/eaxxi4TVN86V0O46FnZvuVi2UKJJtHgyiMiGKSk2.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           },
//           {
//               "id": 35,
//               "type": "privacy_banner",
//               "title": "شبل القانونية حلول قانونية موثوقة",
//               "description": "نقدم لك خدمات قانونية متكاملة بفضل فريق من المحامين المعتمدين والخبراء. استشارات دقيقة، دفاع قوي، وصياغة عقود تحمي حقوقك. تواصل معنا اليوم!",
//               "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/pjNEnKjvztMcJv37X2kYFmrPi3WHlwaHkWQOs1Ds.png",
//               "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//               "is_active": true,
//               "features": []
//           }
//       ],
//       "faq": [
//           {
//               "id": 5,
//               "is_active": 1,
//               "question": "هل تقدمون خدمات قانونية للشركات فقط أم للأفراد أيضاً؟",
//               "answer": "نحن نقدم خدمات قانونية للشركات والأفراد، مصممة خصيصًا لتلبية احتياجاتهم المحددة."
//           },
//           {
//               "id": 4,
//               "is_active": 1,
//               "question": "كيف يمكنني حجز استشارة قانونية؟",
//               "answer": "يمكنك حجز موعد استشارة عن طريق الاتصال بنا مباشرة أو ملء نموذج طلب الموعد على موقعنا الإلكتروني."
//           },
//           {
//               "id": 3,
//               "is_active": 1,
//               "question": "كيف يمكنني التواصل مع فريق شبل القانونية؟",
//               "answer": "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني أو من خلال موقعنا الإلكتروني."
//           },
//           {
//               "id": 1,
//               "is_active": 1,
//               "question": "ما هي الخدمات القانونية التي تقدمها شركة شبل القانونية؟",
//               "answer": "نحن نقدم مجموعة متنوعة من الخدمات القانونية تشمل: الاستشارات القانونية , الترافع والدفاع أمام المحاكم, صياغة العقود, تأسيس الشركات؟, التمثيل القضائي."
//           }
//       ],
//       "banner": {
//           "id": 23,
//           "type": "main_banner",
//           "title": "حلول قانونية مخصصة لاحتياجاتك الفردية والشركات",
//           "description": "نضع مصالح عملائنا في المقام الأول ونعمل جاهدين لتحقيق أفضل النتائج الممكنة في كل قضية",
//           "image": "https://shebl9.azmy.aait-d.com/storage/images/Section/gsdMdk4UTZe0hLSvKdpIPIrriWGEUjr8YXplqERp.jpg",
//           "icon": "https://shebl9.azmy.aait-d.com/dashboardAssets/images/cover/cover_sm.png",
//           "is_active": true,
//           "features": [
//               {
//                   "id": 63,
//                   "key": null,
//                   "value": "فريق من المحامين المعتمدين وذوي الكفاءة",
//                   "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/6c0HPdihCegwHobAOZJKLfsMfPKIUCXvROAOKAjG.png",
//                   "is_active": true
//               },
//               {
//                   "id": 64,
//                   "key": null,
//                   "value": "نجاحات قانونية مشهود لها من عملائنا الكرام",
//                   "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/UGsIFvNCRSSh84nXFpMnOlHM6q5Y1OIIrSfDr1cT.png",
//                   "is_active": true
//               },
//               {
//                   "id": 65,
//                   "key": null,
//                   "value": "خبرة طويلة في جميع التخصصات القانونية",
//                   "icon": "https://shebl9.azmy.aait-d.com/storage/images/Feature/mw90GfzI10ZIS6aqfcZIlqLN1oR7pm5K5DOVMAkx.png",
//                   "is_active": true
//               }
//           ]
//       },
//       "footer_description": "تعرف على رؤيتنا ورسالتنا والقيم التي نؤمن بها. اكتشف قصة تأسيس مكتبنا والمسيرة القانونية التي جعلتنا أحد أبرز المكاتب القانونية. نحن نعمل بكل إخلاص لتحقيق العدالة وخدمة عملائنا."
//   }
// }
