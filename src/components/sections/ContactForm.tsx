import { useState, FormEvent } from "react";
import Container from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "送信に失敗しました");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // 3秒後にステータスをリセット
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact">
      <Container className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading-1 mb-6">
            CONTACT
          </h2>
          <Paragraph>
            For any enquiries, get in touch and contact us.
          </Paragraph>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full md:w-7/12 lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 名前 */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-[rgb(var(--box-border))] text-heading-2 placeholder:text-heading-3 focus:outline-none focus:border-heading-1 transition-colors"
                placeholder="Name"
                disabled={status === "loading"}
              />
            </div>

            {/* メールアドレス */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-[rgb(var(--box-border))] text-heading-2 placeholder:text-heading-3 focus:outline-none focus:border-heading-1 transition-colors"
                placeholder="Email"
                disabled={status === "loading"}
              />
            </div>

            {/* メッセージ */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-b border-[rgb(var(--box-border))] text-heading-2 placeholder:text-heading-3 focus:outline-none focus:border-heading-1 transition-colors resize-none"
                placeholder="Message"
                disabled={status === "loading"}
              />
            </div>

            {/* ステータスメッセージ */}
            {status === "success" && (
              <div className="text-green-600 dark:text-green-400 text-sm">
                Message sent successfully. Thank you!
              </div>
            )}

            {status === "error" && (
              <div className="text-red-600 dark:text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            {/* 送信ボタン */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="text-heading-2 font-medium hover:text-heading-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed underline"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
