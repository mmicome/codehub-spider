import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @Column()
    sex: string
}