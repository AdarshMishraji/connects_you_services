// Original file: src/proto/user.proto

import type { GeoData as _user_GeoData, GeoDataOutput as _user_GeoDataOutput } from '../user/GeoData';

export interface ClientMetaData {
  'ip'?: (string);
  'userAgent'?: (string);
  'geoData'?: (_user_GeoData | null);
  '_ip'?: "ip";
  '_userAgent'?: "userAgent";
  '_geoData'?: "geoData";
}

export interface ClientMetaDataOutput {
  'ip'?: (string);
  'userAgent'?: (string);
  'geoData'?: (_user_GeoDataOutput | null);
  '_ip': "ip";
  '_userAgent': "userAgent";
  '_geoData': "geoData";
}
