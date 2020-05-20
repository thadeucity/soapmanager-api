import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('oils')
class Oil {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  oil_name: string;

  @Column()
  inci_name?: string;

  @Column()
  sap_naoh: number;

  @Column()
  sap_koh: number;

  @Column()
  lauric: number;

  @Column()
  myristic: number;

  @Column()
  palmitic: number;

  @Column()
  stearic: number;

  @Column()
  ricinoleic: number;

  @Column()
  oleic: number;

  @Column()
  linoleic: number;

  @Column()
  linolenic: number;

  @Column()
  hardness: number;

  @Column()
  cleansing: number;

  @Column()
  condition: number;

  @Column()
  bubbly: number;

  @Column()
  creamy: number;

  @Column()
  iodine: number;

  @Column()
  ins: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Oil;
