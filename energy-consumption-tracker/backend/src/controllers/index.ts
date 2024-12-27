import { Router, Application, Request, Response } from 'express';

export class IndexController {
    getEnergyData(req: Request, res: Response) {
        res.send('Energy data');
    }

    postEnergyData(req: Request, res: Response) {
        res.send('Post energy data');
    }

    getPredictiveAnalysis(req: Request, res: Response) {
        res.send('Predictive analysis');
    }
}

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Application) {
    app.use('/api/energy', router);
    router.get('/', indexController.getEnergyData);
    router.post('/', indexController.postEnergyData);
    router.get('/predict', indexController.getPredictiveAnalysis);
}