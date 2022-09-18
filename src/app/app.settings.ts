import { environment } from 'src/environments/environment';

export class AppSettings {
  public static readonly APP_NAME = 'Champions';
  public static readonly APP_LOCALSTORAGE_TOKEN = '__2k_token__';
  public static readonly APP_VERSION = '0.1.0';

  public static readonly API_ENDPOINT = environment.API_ENDPOINT;
  public static readonly API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'login';
  public static readonly API_ENDPOINT_REGISTER = AppSettings.API_ENDPOINT + 'register';
  public static readonly API_ENDPOINT_CHAMPIONS = AppSettings.API_ENDPOINT + 'champions/get/reigns';

  public static readonly APP_DEFAULT_MOMENT_LOCALE = 'es';

  public static readonly VIBRATION_DEFAULT_PATTERN = [200, 500, 200];

  public static readonly NOTIFICATIONS = {
    DEFAULT_TIME: 4000
  };
}