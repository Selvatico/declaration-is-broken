import { EntitySchema } from 'typeorm';

export const entitySchema = new EntitySchema<{ field1: string, field: 2, relation1: string }>({
  name: 'portfolio',
  columns: {
    field1: { type: Number, primary: true, name: 'field1', generated: 'increment' },
    field: { type: 'float', name: 'field', nullable: false },
  },
  relations: {
    relation1: {
      type: 'one-to-many',
      target: 'another_project',
      joinColumn: {
        name: 'field',
        referencedColumnName: 'field',
      },
    },
  },
});


