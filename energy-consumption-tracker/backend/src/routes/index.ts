import { Router, Application } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Application) {
    app.use('/api/energy', router);
    router.get('/', indexController.getEnergyData);
    router.post('/', indexController.postEnergyData);
    router.get('/predict', indexController.getPredictiveAnalysis);
}