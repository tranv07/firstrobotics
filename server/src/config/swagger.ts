import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FIRST Robotics API',
      version: '1.0.0',
      description: 'API documentation for FIRST Robotics platform',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    './src/routes/**/*.ts',
    './src/controllers/**/*.ts',
    './src/schemas/**/*.ts',
    './src/index.ts',
  ],
};

export const swaggerSpec = swaggerJsdoc(options);