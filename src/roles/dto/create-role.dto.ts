import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
    @ApiProperty({ example: 'manager', description: 'Название роли' })
    readonly value: string

    @ApiProperty({
        example: 'Управляет сделками',
        description: 'Описание роли',
    })
    readonly description: string
}
