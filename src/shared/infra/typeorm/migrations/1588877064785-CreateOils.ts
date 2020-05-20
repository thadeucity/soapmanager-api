import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOils1588877064785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'oils',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'oil_name',
            type: 'varchar',
          },
          {
            name: 'inci_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sap_naoh',
            type: 'decimal',
            precision: 5,
            scale: 4,
          },
          {
            name: 'sap_koh',
            type: 'decimal',
            precision: 5,
            scale: 4,
          },
          // Composition
          {
            name: 'lauric',
            type: 'int',
          },
          {
            name: 'myristic',
            type: 'int',
          },
          {
            name: 'palmitic',
            type: 'int',
          },
          {
            name: 'stearic',
            type: 'int',
          },
          {
            name: 'ricinoleic',
            type: 'int',
          },
          {
            name: 'oleic',
            type: 'int',
          },
          {
            name: 'linoleic',
            type: 'int',
          },
          {
            name: 'linolenic',
            type: 'int',
          },
          // Properties
          {
            name: 'hardness',
            type: 'int',
          },
          {
            name: 'cleansing',
            type: 'int',
          },
          {
            name: 'condition',
            type: 'int',
          },
          {
            name: 'bubbly',
            type: 'int',
          },
          {
            name: 'creamy',
            type: 'int',
          },
          {
            name: 'iodine',
            type: 'int',
          },
          {
            name: 'ins',
            type: 'int',
          },
          // Database Information
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('oils');
  }
}
