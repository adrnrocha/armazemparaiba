// /api/login.js (função serverless)
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, senha } = req.body;
        
        // Usuário e senha de exemplo
        const usuarioValido = "admin@gmail.com";
        const senhaValida = "12345";
        
        if (email === usuarioValido && senha === senhaValida) {
            res.status(200).json({ success: true, message: "Login bem-sucedido!" });
        } else {
            res.status(401).json({ success: false, message: "Usuário ou senha inválidos." });
        }
    } else {
        res.status(405).json({ success: false, message: "Método não permitido." });
    }
}
