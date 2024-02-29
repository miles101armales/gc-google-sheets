import { App } from './app';
import { LoggerService } from './logger/logger.service';
import { SalesController } from './sales/sales.controller';
import { ExeptionFilter } from './errors/exeption.filter';
import { TYPES } from './types';
import { Container, ContainerModule, interfaces } from 'inversify';
import { ILogger } from './logger/logger.interface';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { IControllerId } from './sales/sales.controller.interface';
import { GoogleSheetService } from './googlesheet/googleSheet.repository';
import { SalesService } from './sales/sales.service';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<IControllerId>(TYPES.IControllerId).to(SalesController);
	bind<App>(TYPES.Application).to(App);
	bind<SalesService>(TYPES.SalesService).to(SalesService);
	bind<GoogleSheetService>(TYPES.GoogleSheetService).to(GoogleSheetService);
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
