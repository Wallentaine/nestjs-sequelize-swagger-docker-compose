import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './roles.model'

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(dto: CreateRoleDto) {
        try {
            const role = await this.roleRepository.create({
                ...dto,
                value: dto.value.toUpperCase(),
            })

            return role
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({ where: { value } })
        return role
    }
}
