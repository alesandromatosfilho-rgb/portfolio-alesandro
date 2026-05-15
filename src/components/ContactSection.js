import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Configure o arquivo .env com as chaves do EmailJS antes de enviar.");
      setSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("Mensagem enviada com sucesso!");
      formRef.current.reset();
    } catch (error) {
      setStatus("Erro ao enviar. Verifique o EmailJS e tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="section contact-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>Contato</span>
        <h2>Vamos conversar sobre oportunidades e projetos.</h2>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Estou disponível para novos desafios.</h3>
          <p>
            Entre em contato para vagas, networking, projetos web ou oportunidades na área de tecnologia.
          </p>

          <a href="mailto:alesandro.matosfilho@gmail.com" className="contact-link">
            <FaEnvelope /> alesandro.matosfilho@gmail.com
          </a>

          <a href="https://wa.me/558597593793" target="_blank" rel="noreferrer" className="contact-link">
            <FaWhatsapp /> WhatsApp
          </a>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <label>
            Nome
            <input type="text" name="from_name" placeholder="Seu nome" required />
          </label>

          <label>
            E-mail
            <input type="email" name="from_email" placeholder="seuemail@email.com" required />
          </label>

          <label>
            Assunto
            <input type="text" name="subject" placeholder="Assunto da mensagem" required />
          </label>

          <label>
            Mensagem
            <textarea name="message" rows="5" placeholder="Escreva sua mensagem" required />
          </label>

          <button type="submit" className="btn-primary" disabled={sending}>
            <FaPaperPlane /> {sending ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
