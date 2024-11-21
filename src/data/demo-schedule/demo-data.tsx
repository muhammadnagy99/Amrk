import BG from "@/public/bg/Mask group-2.png";
import { DemoData } from "@/src/types/interfaces";

export const demoScheduleData: DemoData = {
  backgroundImage: {
    src: BG,
    alt: "Amrk Restaurant Systems",
  },
  heading: "استمتع ببساطة أمـركـ",
  description: `جرب نظامنا الآن واختبر بنفسك سهولة استخدامه.
                 فريقنا يسعد بالإجابة على استفساراتك في أي وقت.`,
  privacyPolicy: {
    title: "سياسة الخصوصية",
    text: "تلتزم أمرك بحماية خصوصيتك. لن نقوم بأي حال من الأحوال بمشاركة معلوماتك الشخصية مع أي طرف ثالث دون موافقتك.",
  },
  demoFormContent: {
    labels: {
      name: "الاسم",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      restaurantName: "اسم المطعم",
      branches: "عدد الفروع",
      countryPlaceholder: "اختر الدولة",
      submit: "إرسال",
      successMessage: "تم الارسال بنجاح",
      failedMessage: "خطأ في الارسال، حاول مرة أخرى",
    },
    branchOptions: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "more", label: "أكثر" },
    ],
    lang: "ar",
  },
};

export const demoScheduleData_en: DemoData = {
  backgroundImage: {
    src: BG,
    alt: "Amrk Restaurant Systems",
  },
  heading: "Experience Amrk's Simplicity",
  description: `Try our system today and discover how easy it is to use. Our team is here to help you every step of the way.`,
  privacyPolicy: {
    title: "Privacy Policy",
    text: "Amrk is committed to protecting your privacy. We will never share your personal information with any third parties without your consent.",
  },
  demoFormContent: {
    labels: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      restaurantName: "Brand Name",
      branches: "Branches",
      countryPlaceholder: "Select Country",
      submit: "Submit",
      successMessage: "Sent successfully",
      failedMessage: "Failed to send, Try again later"
    },
    branchOptions: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "more", label: "More" },
    ],
    lang: "en",
  },
};
