import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class SaleCreateDto {
	@IsString({ message: 'Invalid ID' })
	@Length(8, 10, { message: 'Invalid Length' })
	id: string;

	@IsString({ message: 'Invalid First Name' })
	firstName: string;

	@IsString({ message: 'Invalid Last Name' })
	lastName: string;

	@IsString({ message: 'Invalid Phone' })
	phone: string;

	@IsOptional()
	@IsEmail({}, { message: 'Invalid Email' })
	email?: string;
}
