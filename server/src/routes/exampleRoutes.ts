import { Router } from 'express';
import {
  getExamples,
  getExampleById,
  createExample,
  updateExample,
  deleteExample,
} from '../controllers/exampleController';

const router = Router();

router.get('/', getExamples);
router.get('/:id', getExampleById);
router.post('/', createExample);
router.put('/:id', updateExample);
router.delete('/:id', deleteExample);

export default router;