export const CONTACT = {
  phone: "+91 74850 22937",
  phoneRaw: "+917485022937",
  whatsappRaw: "917485022937",
  whatsappUrl: "https://wa.me/917485022937",
  email: "contact@adsrahu.com",
};

export const SOCIALS = [
  { name: "LinkedIn", key: "linkedin", url: "https://www.linkedin.com/in/raushanpratapyadav?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Instagram", key: "instagram", url: "https://www.instagram.com/adsrahu?igsh=bDFkODBod2gxNnhu" },
  { name: "X (Twitter)", key: "twitter", url: "https://x.com/Adsrahu" },
  { name: "YouTube", key: "youtube", url: "https://youtube.com/@adsrahu?si=qLNe0mH3CiPcGnra" },
  { name: "WhatsApp Channel", key: "whatsapp", url: "https://whatsapp.com/channel/0029Vb13PcHLI8YaV5TrMm1g" },
] as const;

// Free email-forwarding endpoint. First submission triggers a one-time
// confirmation email to contact@adsrahu.com to activate forwarding.
export const FORM_ENDPOINT = "https://formsubmit.co/ajax/contact@adsrahu.com";
