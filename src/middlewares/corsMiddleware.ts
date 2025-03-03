import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

// Configuração do CORS
const corsOptions = {
    origin: '*', // Permite qualquer origem. Para mais segurança, defina domínios específicos.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

// Middleware de CORS
export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    cors(corsOptions)(req, res, next);
};
