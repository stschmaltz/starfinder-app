import { injectable } from 'inversify';
import { PlaceholderProviderInterface } from './placeholder.provider.interface';

@injectable()
class PlaceholderProvider implements PlaceholderProviderInterface {
  get(): void {
    console.log('get placeholder');
  }
}
export { PlaceholderProvider };
