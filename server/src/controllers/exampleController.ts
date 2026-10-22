import { Request, Response, NextFunction } from 'express';
import { Example } from '../models/Example';
import { exampleSchema, ExampleInput } from '../schemas/example';

/**
 * @swagger
 * /api/examples:
 *   get:
 *     summary: Get all examples
 *     tags: [Examples]
 *     responses:
 *       200:
 *         description: List of examples
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Example'
 */
export const getExamples = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const examples = await Example.find().sort({ createdAt: -1 });
    res.json(examples);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /api/examples/{id}:
 *   get:
 *     summary: Get example by ID
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Example ID
 *     responses:
 *       200:
 *         description: Example found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: Example not found
 */
export const getExampleById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }
    res.json(example);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /api/examples:
 *   post:
 *     summary: Create a new example
 *     tags: [Examples]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExampleInput'
 *     responses:
 *       201:
 *         description: Example created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       400:
 *         description: Validation error
 */
export const createExample = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = exampleSchema.parse(req.body);
    const example = new Example(validatedData);
    await example.save();
    res.status(201).json(example);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /api/examples/{id}:
 *   put:
 *     summary: Update an example
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Example ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExampleInput'
 *     responses:
 *       200:
 *         description: Example updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Example'
 *       404:
 *         description: Example not found
 *       400:
 *         description: Validation error
 */
export const updateExample = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = exampleSchema.partial().parse(req.body);
    const example = await Example.findByIdAndUpdate(
      req.params.id,
      { ...validatedData, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }
    res.json(example);
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /api/examples/{id}:
 *   delete:
 *     summary: Delete an example
 *     tags: [Examples]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Example ID
 *     responses:
 *       204:
 *         description: Example deleted
 *       404:
 *         description: Example not found
 */
export const deleteExample = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const example = await Example.findByIdAndDelete(req.params.id);
    if (!example) {
      return res.status(404).json({ message: 'Example not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};