import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());

// CORS設定
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // バリデーション
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'すべてのフィールドを入力してください。'
      });
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      subject: `お問い合わせ: ${name}様より`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({
      success: true,
      message: 'メッセージが送信されました。',
      data
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'メッセージの送信に失敗しました。'
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
