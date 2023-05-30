import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'e-mail' })
    @IsString({ message: 'Должен быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string

    @ApiProperty({ example: '123qwe123', description: 'Пароль пользователя' })
    @IsString({ message: 'Должен быть строкой' })
    @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
    readonly password: string
}
