import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 只接受 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, type, message } = req.body;
    
    // 基本表单验证
    if (!name || !email || !message) {
      return res.status(400).json({ message: '请填写所有必填字段' });
    }
    
    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // 例如: "smtp.zoho.com"
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // 例如: "support@ufreetools.com"
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    // 发送邮件
    await transporter.sendMail({
      from: `"UFreeTools 反馈系统" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `UFreeTools 反馈: ${type} - 来自 ${name}`,
      text: `
        姓名: ${name}
        邮箱: ${email}
        类型: ${type}
        
        消息:
        ${message}
      `,
      html: `
        <h2>收到新的用户反馈</h2>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>邮箱:</strong> ${email}</p>
        <p><strong>类型:</strong> ${type}</p>
        <h3>消息内容:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    return res.status(200).json({ success: true, message: '反馈已成功提交，感谢您的建议！' });
  } catch (error) {
    console.error('发送反馈邮件时出错:', error);
    return res.status(500).json({ success: false, message: '提交反馈时出错，请稍后再试。' });
  }
} 