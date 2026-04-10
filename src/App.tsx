import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Navigation, Clock, ChevronRight, 
  Activity, Stethoscope, Scissors, FileText, Star, Heart,
  Info, Briefcase, ArrowRight, MessageCircle
} from 'lucide-react';

const t = {
  de: {
    nav: { services: "Leistungen", prices: "Preise", jobs: "Jobs", news: "Aktuelles", reviews: "Bewertungen" },
    hero: {
      title: "Praxis für Podologie in Wesel, Oberhausen und Dortmund",
      subtitle: "Mit unserer Expertise – für Ihre gesunden und schmerzfreien Füße",
      desc: "Unsere Praxis ist für alle Krankenkassen zugelassen – wir behandeln Kassen- und Privatpatient*innen. In unserer modern ausgestatteten Praxis mit höchsten Hygienestandards erwartet Sie eine professionelle Behandlung und fundierte medizinische Beratung. Unser qualifiziertes Fachteam begleitet Sie mit Expertise und Einfühlungsvermögen auf dem Weg zu gesunden, schmerzfreien Füßen.",
      boxTitle: "Neue Patientinnen und Patienten willkommen!",
      boxDesc: "Wir freuen uns, neue Patientinnen und Patienten in unserer Praxis begrüßen zu dürfen. Dank unserer gut organisierten Terminplanung bieten wir Ihnen in der Regel Termine ohne lange Wartezeiten.",
      boxSub: "Wir sind gerne für Sie da – kompetent, persönlich und zeitnah."
    },
    loc: {
      title: "Unsere Standorte",
      subtitle: "Besuchen Sie uns in einer unserer drei modernen Praxen in Wesel, Oberhausen oder Dortmund.",
      address: "Adresse",
      phone: "Telefon",
      whatsapp: "WhatsApp",
      transit: "Anfahrt",
      hours: "Öffnungszeiten",
      closed: "Geschlossen",
      callNow: "Jetzt anrufen",
      map: "Auf Karte anzeigen",
      gallery: "Galerie ansehen",
      transitO: "Patientenparkplätze direkt vor der Praxis\nBus: Linie 957 bis Alleestraße",
      transitW: "Parkplätze vorhanden",
      transitD: "Zentrale Lage",
      days: ["Montag:", "Dienstag:", "Mittwoch:", "Donnerstag:", "Freitag:", "Samstag:", "Sonntag:", "Montag - Donnerstag:", "Samstag + Sonntag:"]
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Wir bieten Ihnen ein umfassendes Spektrum an medizinischen podologischen Behandlungen für Ihre Fußgesundheit. Als zugelassene podologische Praxis arbeiten wir nach aktuellen medizinischen Leitlinien und beraten Sie umfassend.",
      items: [
        { title: "Podologische Komplexbehandlung", desc: "Umfassende medizinische Behandlung Ihrer Füße nach aktuellen podologischen Standards", bullets: ["Hornhautabtragung", "Nagelbehandlung", "Druckentlastung"] },
        { title: "Podologische Komplexbehandlung für Diabetiker und Patienten mit Polyneuropathie", desc: "Spezialisierte Behandlung nach Heilmittelverordnung für Risikopatienten", bullets: ["Risikobewertung", "Präventive Maßnahmen", "Wundversorgung", "Zusammenarbeit mit Ärzten"] },
        { title: "Nagelbehandlung & Nagelkorrektur", desc: "Fachgerechte Behandlung von eingewachsenen Nägeln und Nagelerkrankungen", bullets: ["Eingewachsene Nägel", "Deformierte Nägel", "Nagelpilz", "Nagelkorrektur"] },
        { title: "Nagelspangentherapie", desc: "Spange statt Operation", bullets: ["Moderne Nagelkorrekturverfahren", "Kassenleistung seit 1. Juli 2022", "Draht-, Kunststoff- oder Klebespangen", "Schmerzfrei und effektiv"] },
        { title: "Nagelpilzbehandlung", desc: "Effektive Behandlung von Nagelpilzinfektionen", bullets: ["Pilzdiagnostik", "Medizinische Nagelpflege", "Behandlungsberatung"] }
      ]
    },
    prices: {
      title: "Unsere Preise",
      subtitle: "Transparente Preisgestaltung für qualitativ hochwertige podologische Behandlungen",
      items: [
        { title: "Podologische Komplexbehandlung", desc: "nach Aufwand - bei Erstbehandlung", price: "ab 65,00 €" },
        { title: "Podologische Komplexbehandlung", desc: "nach Aufwand - ohne Zusatzleistung", price: "ab 53,00 €" },
        { title: "Podologische Teilbehandlung", desc: "nach Aufwand - ohne Zusatzleistung", price: "ab 45,00 €" },
        { title: "Akutbehandlung", desc: "nach Aufwand - ohne Zusatzleistung", price: "ab 35,00 €" },
        { title: "Kinderfußpflege", desc: "nach Aufwand - ohne Zusatzleistung", price: "ab 55,00 €" },
        { title: "Teilbehandlung bei Kindern", desc: "nach Aufwand - ohne Zusatzleistung", price: "ab 45,00 €" },
        { title: "Nagelkorrekturspange", desc: "individuell angepasst", price: "ab 65,00 €" }
      ],
      info: "Bei der Terminabsage in weniger als 24 Stunden vor dem Termin, wird eine Pauschale von 40 € erhoben."
    },
    jobs: {
      title: "Jobs",
      subtitle: "Werden Sie Teil unseres Teams",
      jobTitle: "Podologin / Podologe für unsere Praxis in Wesel, Oberhausen und Dortmund in Vollzeit / Teilzeit gesucht",
      jobDesc: "Wir suchen eine engagierte Podologin oder einen engagierten Podologen für unsere kassenzugelassene Praxis in Wesel, Oberhausen und Dortmund. Diese Stelle kann auch mit dem Schwerpunkt Haus- und Heimbesuche angetreten werden.",
      applyTitle: "Bewerbung",
      applyDesc: "Wir freuen uns darauf, Sie kennenzulernen!\n\nBitte senden Sie Ihre schriftliche Bewerbung an:"
    },
    news: {
      title: "Aktuelles",
      subtitle: "Bleiben Sie informiert über Neuigkeiten, Behandlungsmethoden und wichtige Informationen",
      badge: "Information",
      newsTitle: "Nagelspangenbehandlung – jetzt von der Kasse übernommen!",
      newsDesc: "Haben Sie Probleme mit eingewachsenen oder eingerollten Fußnägeln? Dann gibt es gute Nachrichten: Seit dem 1. Juli 2022 kann die Nagelspangenbehandlung von Ihrer Ärztin oder Ihrem Arzt als Heilmittel verordnet werden – und die gesetzliche Krankenkasse übernimmt die Kosten (bei entsprechender medizinischer Notwendigkeit)."
    },
    reviews: {
      title: "Patientenbewertungen",
      subtitle: "Erfahrungsberichte unserer Patientinnen und Patienten",
      reviewText: "War neulich das erste Mal dort und ich muss sagen, ich hatte noch nie eine so kompetente und gründliche Fußpflege. Ich würde direkt herzlich empfangen und fühlte mich von der ersten Sekunde an, wohl. Ich komme sehr gerne wieder.",
      reviewTime: "vor 7 Monaten"
    },
    footer: {
      desc: "Ihre professionelle Podologie-Praxis für gesunde und gepflegte Füße in Wesel, Oberhausen & Dortmund.",
      madeWith: "Gemacht mit",
      in: "in NRW",
      quickLinks: "Schnelllinks",
      contact: "Kontakt",
      hours: "Öffnungszeiten",
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB"
    }
  },
  en: {
    nav: { services: "Services", prices: "Prices", jobs: "Jobs", news: "News", reviews: "Reviews" },
    hero: {
      title: "Podiatry Practice in Wesel, Oberhausen and Dortmund",
      subtitle: "With our expertise – for your healthy and pain-free feet",
      desc: "Our practice is approved by all health insurances – we treat both statutory and private patients. In our modernly equipped practice with the highest hygiene standards, you can expect professional treatment and sound medical advice. Our qualified team of experts will accompany you with expertise and empathy on the way to healthy, pain-free feet.",
      boxTitle: "New patients welcome!",
      boxDesc: "We look forward to welcoming new patients to our practice. Thanks to our well-organized appointment scheduling, we can usually offer you appointments without long waiting times.",
      boxSub: "We are happy to be there for you – competent, personal and prompt."
    },
    loc: {
      title: "Our Locations",
      subtitle: "Visit us in one of our three modern practices in Wesel, Oberhausen or Dortmund.",
      address: "Address",
      phone: "Phone",
      whatsapp: "WhatsApp",
      transit: "Directions",
      hours: "Opening Hours",
      closed: "Closed",
      callNow: "Call now",
      map: "Show on map",
      gallery: "View gallery",
      transitO: "Patient parking directly in front of the practice\nBus: Line 957 to Alleestraße",
      transitW: "Parking available",
      transitD: "Central location",
      days: ["Monday:", "Tuesday:", "Wednesday:", "Thursday:", "Friday:", "Saturday:", "Sunday:", "Monday - Thursday:", "Saturday + Sunday:"]
    },
    services: {
      title: "Our Services",
      subtitle: "We offer you a comprehensive range of medical podiatric treatments for your foot health. As a licensed podiatry practice, we work according to current medical guidelines and advise you comprehensively.",
      items: [
        { title: "Complex Podiatric Treatment", desc: "Comprehensive medical treatment of your feet according to current podiatric standards", bullets: ["Callus removal", "Nail treatment", "Pressure relief"] },
        { title: "Complex Podiatric Treatment for Diabetics", desc: "Specialized treatment according to medical prescription for high-risk patients", bullets: ["Risk assessment", "Preventive measures", "Wound care", "Cooperation with doctors"] },
        { title: "Nail Treatment & Correction", desc: "Professional treatment of ingrown nails and nail diseases", bullets: ["Ingrown nails", "Deformed nails", "Nail fungus", "Nail correction"] },
        { title: "Nail Brace Therapy", desc: "Brace instead of surgery", bullets: ["Modern nail correction methods", "Covered by health insurance since July 1, 2022", "Wire, plastic or adhesive braces", "Painless and effective"] },
        { title: "Nail Fungus Treatment", desc: "Effective treatment of nail fungus infections", bullets: ["Fungus diagnostics", "Medical nail care", "Treatment consultation"] }
      ]
    },
    prices: {
      title: "Our Prices",
      subtitle: "Transparent pricing for high-quality podiatric treatments",
      items: [
        { title: "Complex Podiatric Treatment", desc: "according to effort - initial treatment", price: "from 65.00 €" },
        { title: "Complex Podiatric Treatment", desc: "according to effort - without additional services", price: "from 53.00 €" },
        { title: "Partial Podiatric Treatment", desc: "according to effort - without additional services", price: "from 45.00 €" },
        { title: "Acute Treatment", desc: "according to effort - without additional services", price: "from 35.00 €" },
        { title: "Children's Foot Care", desc: "according to effort - without additional services", price: "from 55.00 €" },
        { title: "Partial Treatment for Children", desc: "according to effort - without additional services", price: "from 45.00 €" },
        { title: "Nail Correction Brace", desc: "individually adapted", price: "from 65.00 €" }
      ],
      info: "For cancellations less than 24 hours before the appointment, a flat rate of 40 € will be charged."
    },
    jobs: {
      title: "Jobs",
      subtitle: "Become part of our team",
      jobTitle: "Podiatrist for our practice in Wesel, Oberhausen and Dortmund sought (full-time / part-time)",
      jobDesc: "We are looking for a dedicated podiatrist for our licensed practice in Wesel, Oberhausen and Dortmund. This position can also be taken up with a focus on home visits.",
      applyTitle: "Application",
      applyDesc: "We look forward to getting to know you!\n\nPlease send your written application to:"
    },
    news: {
      title: "News",
      subtitle: "Stay informed about news, treatment methods and important information",
      badge: "Information",
      newsTitle: "Nail brace treatment – now covered by health insurance!",
      newsDesc: "Do you have problems with ingrown or curled toenails? Then there is good news: Since July 1, 2022, nail brace treatment can be prescribed by your doctor as a remedy – and the statutory health insurance covers the costs (if medically necessary)."
    },
    reviews: {
      title: "Patient Reviews",
      subtitle: "Testimonials from our patients",
      reviewText: "Was there for the first time recently and I have to say, I've never had such competent and thorough foot care. I was warmly welcomed immediately and felt comfortable from the very first second. I will gladly come back.",
      reviewTime: "7 months ago"
    },
    footer: {
      desc: "Your professional podiatry practice for healthy and well-groomed feet in Wesel, Oberhausen & Dortmund.",
      madeWith: "Made with",
      in: "in NRW",
      quickLinks: "Quick Links",
      contact: "Contact",
      hours: "Opening Hours",
      rights: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  },
  vi: {
    nav: { services: "Dịch vụ", prices: "Bảng giá", jobs: "Tuyển dụng", news: "Tin tức", reviews: "Đánh giá" },
    hero: {
      title: "Phòng khám Chăm sóc chân tại Wesel, Oberhausen và Dortmund",
      subtitle: "Với chuyên môn của chúng tôi – cho đôi chân khỏe mạnh và không đau của bạn",
      desc: "Phòng khám của chúng tôi được tất cả các bảo hiểm y tế chấp thuận – chúng tôi điều trị cho cả bệnh nhân bảo hiểm và tư nhân. Tại phòng khám được trang bị hiện đại với tiêu chuẩn vệ sinh cao nhất, bạn sẽ nhận được sự điều trị chuyên nghiệp và tư vấn y tế vững chắc. Đội ngũ chuyên gia có trình độ của chúng tôi sẽ đồng hành cùng bạn với chuyên môn và sự đồng cảm trên con đường hướng tới đôi chân khỏe mạnh, không đau.",
      boxTitle: "Chào mừng bệnh nhân mới!",
      boxDesc: "Chúng tôi rất vui mừng được chào đón các bệnh nhân mới đến với phòng khám của chúng tôi. Nhờ việc sắp xếp lịch hẹn được tổ chức tốt, chúng tôi thường có thể cung cấp cho bạn các cuộc hẹn mà không phải chờ đợi lâu.",
      boxSub: "Chúng tôi rất vui được phục vụ bạn – chuyên nghiệp, tận tâm và nhanh chóng."
    },
    loc: {
      title: "Địa điểm của chúng tôi",
      subtitle: "Hãy đến thăm chúng tôi tại một trong ba phòng khám hiện đại ở Wesel, Oberhausen hoặc Dortmund.",
      address: "Địa chỉ",
      phone: "Điện thoại",
      whatsapp: "WhatsApp",
      transit: "Đường đi",
      hours: "Giờ mở cửa",
      closed: "Đóng cửa",
      callNow: "Gọi ngay",
      map: "Xem trên bản đồ",
      gallery: "Xem thư viện ảnh",
      transitO: "Bãi đậu xe cho bệnh nhân ngay trước phòng khám\nXe buýt: Tuyến 957 đến Alleestraße",
      transitW: "Có bãi đậu xe",
      transitD: "Vị trí trung tâm",
      days: ["Thứ Hai:", "Thứ Ba:", "Thứ Tư:", "Thứ Năm:", "Thứ Sáu:", "Thứ Bảy:", "Chủ Nhật:", "Thứ Hai - Thứ Năm:", "Thứ Bảy + Chủ Nhật:"]
    },
    services: {
      title: "Dịch vụ của chúng tôi",
      subtitle: "Chúng tôi cung cấp cho bạn một loạt các phương pháp điều trị y tế chăm sóc chân toàn diện cho sức khỏe đôi chân của bạn. Là một phòng khám được cấp phép, chúng tôi làm việc theo các hướng dẫn y tế hiện hành và tư vấn toàn diện cho bạn.",
      items: [
        { title: "Điều trị Chăm sóc chân Toàn diện", desc: "Điều trị y tế toàn diện cho đôi chân của bạn theo tiêu chuẩn hiện hành", bullets: ["Loại bỏ vết chai", "Điều trị móng", "Giảm áp lực"] },
        { title: "Điều trị Toàn diện cho Bệnh nhân Tiểu đường", desc: "Điều trị chuyên biệt theo đơn thuốc cho bệnh nhân có nguy cơ cao", bullets: ["Đánh giá rủi ro", "Biện pháp phòng ngừa", "Chăm sóc vết thương", "Hợp tác với bác sĩ"] },
        { title: "Điều trị & Chỉnh hình Móng", desc: "Điều trị chuyên nghiệp móng mọc ngược và các bệnh về móng", bullets: ["Móng mọc ngược", "Móng biến dạng", "Nấm móng", "Chỉnh hình móng"] },
        { title: "Liệu pháp Niềng móng", desc: "Niềng thay vì phẫu thuật", bullets: ["Phương pháp chỉnh hình móng hiện đại", "Được bảo hiểm y tế chi trả từ 1/7/2022", "Niềng dây, nhựa hoặc dán", "Không đau và hiệu quả"] },
        { title: "Điều trị Nấm móng", desc: "Điều trị hiệu quả nhiễm trùng nấm móng", bullets: ["Chẩn đoán nấm", "Chăm sóc móng y tế", "Tư vấn điều trị"] }
      ]
    },
    prices: {
      title: "Bảng giá của chúng tôi",
      subtitle: "Định giá minh bạch cho các phương pháp điều trị chất lượng cao",
      items: [
        { title: "Điều trị Chăm sóc chân Toàn diện", desc: "tùy theo mức độ - điều trị lần đầu", price: "từ 65,00 €" },
        { title: "Điều trị Chăm sóc chân Toàn diện", desc: "tùy theo mức độ - không có dịch vụ bổ sung", price: "từ 53,00 €" },
        { title: "Điều trị Chăm sóc chân Một phần", desc: "tùy theo mức độ - không có dịch vụ bổ sung", price: "từ 45,00 €" },
        { title: "Điều trị Cấp tính", desc: "tùy theo mức độ - không có dịch vụ bổ sung", price: "từ 35,00 €" },
        { title: "Chăm sóc chân Trẻ em", desc: "tùy theo mức độ - không có dịch vụ bổ sung", price: "từ 55,00 €" },
        { title: "Điều trị Một phần cho Trẻ em", desc: "tùy theo mức độ - không có dịch vụ bổ sung", price: "từ 45,00 €" },
        { title: "Niềng Chỉnh hình Móng", desc: "điều chỉnh cá nhân", price: "từ 65,00 €" }
      ],
      info: "Đối với việc hủy lịch hẹn dưới 24 giờ trước cuộc hẹn, mức phí cố định 40 € sẽ được tính."
    },
    jobs: {
      title: "Tuyển dụng",
      subtitle: "Trở thành một phần của đội ngũ chúng tôi",
      jobTitle: "Cần tuyển Bác sĩ chuyên khoa chân cho phòng khám tại Wesel, Oberhausen và Dortmund (toàn thời gian / bán thời gian)",
      jobDesc: "Chúng tôi đang tìm kiếm một bác sĩ chuyên khoa chân tận tâm cho phòng khám được cấp phép của chúng tôi tại Wesel, Oberhausen và Dortmund. Vị trí này cũng có thể tập trung vào việc thăm khám tại nhà.",
      applyTitle: "Ứng tuyển",
      applyDesc: "Chúng tôi rất mong được làm quen với bạn!\n\nVui lòng gửi đơn ứng tuyển bằng văn bản của bạn đến:"
    },
    news: {
      title: "Tin tức",
      subtitle: "Luôn cập nhật thông tin về tin tức, phương pháp điều trị và thông tin quan trọng",
      badge: "Thông tin",
      newsTitle: "Điều trị niềng móng – hiện được bảo hiểm y tế chi trả!",
      newsDesc: "Bạn có vấn đề với móng chân mọc ngược hoặc cong? Có một tin tốt: Kể từ ngày 1 tháng 7 năm 2022, điều trị niềng móng có thể được bác sĩ kê đơn như một phương pháp chữa bệnh – và bảo hiểm y tế theo luật định sẽ chi trả chi phí (nếu cần thiết về mặt y tế)."
    },
    reviews: {
      title: "Đánh giá của bệnh nhân",
      subtitle: "Lời chứng thực từ bệnh nhân của chúng tôi",
      reviewText: "Gần đây đã đến đó lần đầu tiên và tôi phải nói rằng, tôi chưa bao giờ được chăm sóc chân chu đáo và chuyên nghiệp như vậy. Tôi được chào đón nồng nhiệt ngay lập tức và cảm thấy thoải mái ngay từ giây phút đầu tiên. Tôi sẽ rất vui được quay lại.",
      reviewTime: "7 tháng trước"
    },
    footer: {
      desc: "Phòng khám chăm sóc chân chuyên nghiệp của bạn cho đôi chân khỏe mạnh và được chăm sóc tốt tại Wesel, Oberhausen & Dortmund.",
      madeWith: "Làm với",
      in: "tại NRW",
      quickLinks: "Liên kết nhanh",
      contact: "Liên hệ",
      hours: "Giờ mở cửa",
      rights: "Bảo lưu mọi quyền.",
      imprint: "Dấu ấn",
      privacy: "Bảo mật",
      terms: "Điều khoản"
    }
  }
};

const serviceIcons = [Activity, Stethoscope, Scissors, FileText, Activity];

export default function App() {
  const [lang, setLang] = useState<'de' | 'en' | 'vi'>('de');
  const [loc, setLoc] = useState<'Wesel' | 'Oberhausen' | 'Dortmund'>('Oberhausen');
  const [activeLegal, setActiveLegal] = useState<'imprint' | 'privacy' | 'terms' | null>(null);
  
  const currentT = t[lang];

  const locData = {
    Oberhausen: {
      address: "Alleestraße 1\n46049 Oberhausen",
      mapsLink: "https://maps.google.com/?q=Alleestraße+1,+46049+Oberhausen",
      phone: "015562 064080",
      whatsapp: "015562 064080",
      transit: currentT.loc.transitO,
      hours: [
        { d: currentT.loc.days[7], t: "09:00 - 17:00" },
        { d: currentT.loc.days[4], t: "09:00 - 14:00" },
        { d: currentT.loc.days[8], t: currentT.loc.closed },
      ]
    },
    Wesel: {
      address: "Am Blauen Hahn 5\n46483 Wesel",
      mapsLink: "https://maps.google.com/?q=Am+Blauen+Hahn+5,+46483+Wesel",
      phone: "01525 5629113",
      whatsapp: "01525 5629113",
      transit: currentT.loc.transitW,
      hours: [
        { d: currentT.loc.days[7], t: "09:00 - 17:00" },
        { d: currentT.loc.days[4], t: "09:00 - 14:00" },
        { d: currentT.loc.days[8], t: currentT.loc.closed },
      ]
    },
    Dortmund: {
      address: "Kampstr. 45\n44137 Dortmund",
      mapsLink: "https://maps.google.com/?q=Kampstr.+45,+44137+Dortmund",
      phone: "015568 839795",
      whatsapp: "015568 839795",
      transit: currentT.loc.transitD,
      hours: [
        { d: currentT.loc.days[7], t: "09:00 - 17:00" },
        { d: currentT.loc.days[4], t: "09:00 - 14:00" },
        { d: currentT.loc.days[8], t: currentT.loc.closed },
      ]
    }
  };

  const activeLoc = locData[loc];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-600 hidden md:block">
            <img src="https://s1.directupload.eu/images/260330/8dfcuvns.png" alt="Podo Aktiv Logo" className="h-10" />
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
            <a href="#leistungen" className="hover:text-blue-600">{currentT.nav.services}</a>
            <a href="#preise" className="hover:text-blue-600">{currentT.nav.prices}</a>
            <a href="#jobs" className="hover:text-blue-600">{currentT.nav.jobs}</a>
            <a href="#aktuelles" className="hover:text-blue-600">{currentT.nav.news}</a>
            <a href="#bewertungen" className="hover:text-blue-600">{currentT.nav.reviews}</a>
          </div>
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as 'de'|'en'|'vi')}
            className="border border-slate-300 px-2 py-1.5 rounded text-sm font-medium bg-white hover:bg-slate-50 outline-none cursor-pointer"
          >
            <option value="de">🇩🇪 DE</option>
            <option value="en">🇬🇧 EN</option>
            <option value="vi">🇻🇳 VI</option>
          </select>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-50 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto mb-12 flex items-center justify-center">
            <img src="https://s1.directupload.eu/images/260330/8dfcuvns.png" alt="Podo Aktiv Logo" className="w-full max-w-[16rem] md:max-w-[20rem] object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{currentT.hero.title}</h1>
          <p className="text-xl text-blue-600 font-medium mb-6">{currentT.hero.subtitle}</p>
          <p className="text-slate-600 mb-10 leading-relaxed">
            {currentT.hero.desc}
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{currentT.hero.boxTitle}</h3>
            <p className="text-slate-600 mb-4">
              {currentT.hero.boxDesc}
            </p>
            <p className="text-blue-600 font-medium">{currentT.hero.boxSub}</p>
          </div>
        </div>
      </section>

      {/* Standorte */}
      <section id="standorte" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.loc.title}</h2>
            <p className="text-slate-600">{currentT.loc.subtitle}</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-full inline-flex flex-wrap justify-center gap-1">
              <button 
                onClick={() => setLoc('Wesel')}
                className={`px-6 md:px-8 py-2 rounded-full text-sm font-medium transition-colors ${loc === 'Wesel' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Wesel
              </button>
              <button 
                onClick={() => setLoc('Oberhausen')}
                className={`px-6 md:px-8 py-2 rounded-full text-sm font-medium transition-colors ${loc === 'Oberhausen' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Oberhausen
              </button>
              <button 
                onClick={() => setLoc('Dortmund')}
                className={`px-6 md:px-8 py-2 rounded-full text-sm font-medium transition-colors ${loc === 'Dortmund' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Dortmund
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-8">{loc}</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><MapPin size={20} /></div>
                  <div>
                    <div className="font-bold text-slate-900">{currentT.loc.address}</div>
                    <div className="text-slate-600 whitespace-pre-line">
                      <a href={activeLoc.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600">
                        {activeLoc.address}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><Phone size={20} /></div>
                  <div>
                    <div className="font-bold text-slate-900">{currentT.loc.phone}</div>
                    <div className="text-blue-600 font-medium">{activeLoc.phone}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><MessageCircle size={20} /></div>
                  <div>
                    <div className="font-bold text-slate-900">{currentT.loc.whatsapp}</div>
                    <div className="text-blue-600 font-medium">
                      <a href={`https://wa.me/${activeLoc.whatsapp.replace(/\s+/g, '').replace(/^0/, '+49')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {activeLoc.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><Navigation size={20} /></div>
                  <div>
                    <div className="font-bold text-slate-900">{currentT.loc.transit}</div>
                    <div className="text-slate-600 whitespace-pre-line text-sm">{activeLoc.transit}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><Clock size={20} /></div>
                  <div className="font-bold text-slate-900 mt-2">{currentT.loc.hours}</div>
                </div>
                <div className="pl-14">
                  <table className="w-full text-sm text-slate-600">
                    <tbody>
                      {activeLoc.hours.map((h, i) => (
                        <tr key={i}>
                          <td className="py-1">{h.d}</td>
                          <td className="py-1 text-right">{h.t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={`tel:${activeLoc.phone.replace(/\s+/g, '')}`} className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <Phone size={18} /> {currentT.loc.callNow}
              </a>
              <a href={activeLoc.mapsLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <MapPin size={18} /> {currentT.loc.map}
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors sm:col-span-2">
                <Navigation size={18} /> {currentT.loc.gallery}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.services.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {currentT.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentT.services.items.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.prices.title}</h2>
            <p className="text-slate-600">{currentT.prices.subtitle}</p>
          </div>
          
          <div className="space-y-3 mb-6">
            {currentT.prices.items.map((p, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-slate-900">{p.title}</div>
                  <div className="text-sm text-slate-500">{p.desc}</div>
                </div>
                <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg whitespace-nowrap">
                  {p.price}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 text-sm text-slate-600">
            <Info className="text-blue-600 shrink-0" size={20} />
            <p>{currentT.prices.info}</p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.jobs.title}</h2>
            <p className="text-slate-600">{currentT.jobs.subtitle}</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{currentT.jobs.jobTitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentT.jobs.jobDesc}
                </p>
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-blue-600 mb-2">{currentT.jobs.applyTitle}</h4>
              <p className="text-sm text-slate-600 mb-6 whitespace-pre-line">{currentT.jobs.applyDesc}</p>
              
              <div className="flex">
                <a href="mailto:podoaktiv@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <Mail size={18} /> podoaktiv@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuelles */}
      <section id="aktuelles" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.news.title}</h2>
            <p className="text-slate-600">{currentT.news.subtitle}</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">{currentT.news.badge}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{currentT.news.newsTitle}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {currentT.news.newsDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{currentT.reviews.title}</h2>
          <p className="text-slate-600 mb-8">{currentT.reviews.subtitle}</p>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-left mb-8">
            <div className="font-bold text-slate-900">Lara Scheufele</div>
            <div className="text-xs text-slate-500 mb-3">{currentT.reviews.reviewTime}</div>
            <div className="flex text-yellow-400 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {currentT.reviews.reviewText}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-slate-800 text-slate-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Podo Aktiv</h4>
            <p className="text-sm mb-6">{currentT.footer.desc}</p>
            <p className="text-sm flex items-center gap-1">{currentT.footer.madeWith} <Heart size={14} className="text-red-500" fill="currentColor" /> {currentT.footer.in}</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{currentT.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#leistungen" className="hover:text-white transition-colors">{currentT.nav.services}</a></li>
              <li><a href="#aktuelles" className="hover:text-white transition-colors">{currentT.nav.news}</a></li>
              <li><a href="#bewertungen" className="hover:text-white transition-colors">{currentT.nav.reviews}</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">{currentT.footer.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{currentT.footer.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-slate-400" />
                <span>Am Blauen Hahn 5<br/>46483 Wesel</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-slate-400" />
                <span>01525 5629113</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} className="shrink-0 text-slate-400" />
                <span>WhatsApp: 01525 5629113</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{currentT.footer.hours}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Clock size={18} className="shrink-0 text-slate-400" />
                <div>
                  <div className="text-white font-medium">{currentT.loc.days[7]}</div>
                  <div>09:00 - 17:00</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[18px] shrink-0" />
                <div>
                  <div className="text-white font-medium">{currentT.loc.days[4]}</div>
                  <div>09:00 - 14:00</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-[18px] shrink-0" />
                <div>
                  <div className="text-white font-medium">{currentT.loc.days[8]}</div>
                  <div>{currentT.loc.closed}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div>© 2026 Podo Aktiv. {currentT.footer.rights}</div>
          <div className="flex gap-4">
            <button onClick={() => setActiveLegal('imprint')} className="hover:text-white transition-colors">{currentT.footer.imprint}</button>
            <button onClick={() => setActiveLegal('privacy')} className="hover:text-white transition-colors">{currentT.footer.privacy}</button>
            <button onClick={() => setActiveLegal('terms')} className="hover:text-white transition-colors">{currentT.footer.terms}</button>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegal && (
        <div className="fixed inset-0 bg-slate-900/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setActiveLegal(null)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                {activeLegal === 'imprint' && currentT.footer.imprint}
                {activeLegal === 'privacy' && currentT.footer.privacy}
                {activeLegal === 'terms' && currentT.footer.terms}
              </h3>
              <button onClick={() => setActiveLegal(null)} className="text-slate-400 hover:text-slate-600 p-2">
                ✕
              </button>
            </div>
            <div className="p-6 text-slate-600 text-sm space-y-4">
              {activeLegal === 'imprint' && (
                <>
                  <p><strong>Angaben gemäß § 5 TMG:</strong></p>
                  <p>Podo Aktiv<br/>Am Blauen Hahn 5<br/>46483 Wesel</p>
                  <p><strong>Kontakt:</strong><br/>Telefon: 01525 5629113<br/>E-Mail: podoaktiv@gmail.com</p>
                  <p>Dies ist ein Platzhalter für das vollständige Impressum. Bitte fügen Sie hier Ihre rechtlich bindenden Angaben ein.</p>
                </>
              )}
              {activeLegal === 'privacy' && (
                <>
                  <p><strong>Datenschutzerklärung</strong></p>
                  <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                  <p>Dies ist ein Platzhalter für die vollständige Datenschutzerklärung. Bitte fügen Sie hier Ihre rechtlich bindenden Angaben ein.</p>
                </>
              )}
              {activeLegal === 'terms' && (
                <>
                  <p><strong>Allgemeine Geschäftsbedingungen (AGB)</strong></p>
                  <p>Dies ist ein Platzhalter für die vollständigen AGB. Bitte fügen Sie hier Ihre rechtlich bindenden Angaben ein.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
