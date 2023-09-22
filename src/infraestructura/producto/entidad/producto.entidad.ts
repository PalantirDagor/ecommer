import { CategoriaEntidad } from 'src/infraestructura/categoria/entidad/categoria.entidad';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'producto' })
export class ProductoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  detalle: string;

  @ManyToOne((type) => CategoriaEntidad, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: CategoriaEntidad;

  @Column({ name: 'nombre_imagen' })
  nombreImagen: string;
}
