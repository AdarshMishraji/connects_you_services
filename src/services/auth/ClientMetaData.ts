// Original file: src/proto/auth.proto

import type { GeoData as _auth_GeoData, GeoDataOutput as _auth_GeoDataOutput } from '../auth/GeoData';

export interface ClientMetaData {
  'ip'?: (string);
  'userAgent'?: (string);
  'geoData'?: (_auth_GeoData | null);
  '_ip'?: "ip";
  '_userAgent'?: "userAgent";
  '_geoData'?: "geoData";
}

export interface ClientMetaDataOutput {
  'ip'?: (string);
  'userAgent'?: (string);
  'geoData'?: (_auth_GeoDataOutput | null);
  '_ip': "ip";
  '_userAgent': "userAgent";
  '_geoData': "geoData";
}
