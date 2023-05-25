import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'e-mail' })
    readonly email: string

    @ApiProperty({ example: '123qwe123', description: 'Пароль пользователя' })
    readonly password: string
}
