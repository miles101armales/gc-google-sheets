export class Id {
	constructor(
		private readonly _id: string,
		private readonly _firstname: string,
		private readonly _lastname: string,
		private readonly _phone: string,
	) {}

	get id(): string {
		return this._id;
	}

	get firstname(): string {
		return this._firstname;
	}

	get lastname(): string {
		return this._lastname;
	}

	get phone(): string {
		return this._phone;
	}
}
