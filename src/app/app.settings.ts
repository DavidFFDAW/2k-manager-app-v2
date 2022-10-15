import { environment } from 'src/environments/environment';

export class AppSettings {
  public static readonly APP_NAME = 'Champions';
  public static readonly APP_LOCALSTORAGE_TOKEN = '__2k_token__';
  public static readonly APP_VERSION = '0.1.2';
  public static readonly FALLBACK_NO_IMAGE = 'http://vps-f87b433e.vps.ovh.net:8625/images/no-pic.jpg';

  public static readonly API_ENDPOINT = environment.API_ENDPOINT;
  public static readonly API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'login';
  public static readonly API_ENDPOINT_REGISTER = AppSettings.API_ENDPOINT + 'register';
  public static readonly API_ENDPOINT_CHAMPIONS = AppSettings.API_ENDPOINT + 'champions/get/reigns';
  public static readonly API_ENDPOINT_TEAMS = AppSettings.API_ENDPOINT + 'teams/names';
  public static readonly API_ENDPOINT_WRESTLERS = AppSettings.API_ENDPOINT + 'wrestlers/get';


  public static getEndpointForWrestlerReigns = (id: number) => `${ AppSettings.API_ENDPOINT }champions/get/reigns/of/wrestler?wrestler=${id}`;
  
  public static getEndpointForChampionshipReigns = (id: number) => `${ AppSettings.API_ENDPOINT }champions/get/reigns/of/championship?championship=${id}`;
  
  public static getEndpointForChamopionshipWrestlerReigns = (championshipId: number, wrestlerId: number) => {
    return `${ AppSettings.API_ENDPOINT }champions/get/reigns/of/wrestler/championship?wrestler=${wrestlerId}&championship=${championshipId}`;
  }

  
  public static readonly APP_DEFAULT_MOMENT_LOCALE = 'es';
  public static readonly VIBRATION_DEFAULT_PATTERN = [200, 500, 200];
  public static readonly NOTIFICATIONS = {
    DEFAULT_TIME: 4000
  };
}