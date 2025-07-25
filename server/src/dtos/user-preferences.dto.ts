import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsPositive, ValidateNested } from 'class-validator';
import { AssetOrder, UserAvatarColor } from 'src/enum';
import { UserPreferences } from 'src/types';
import { Optional, ValidateBoolean, ValidateEnum } from 'src/validation';

class AvatarUpdate {
  @ValidateEnum({ enum: UserAvatarColor, name: 'UserAvatarColor', optional: true })
  color?: UserAvatarColor;
}

class MemoriesUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;
}

class RatingsUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;
}

class AlbumsUpdate {
  @ValidateEnum({ enum: AssetOrder, name: 'AssetOrder', optional: true })
  defaultAssetOrder?: AssetOrder;
}

class FoldersUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;

  @ValidateBoolean({ optional: true })
  sidebarWeb?: boolean;
}

class PeopleUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;

  @ValidateBoolean({ optional: true })
  sidebarWeb?: boolean;
}

class SharedLinksUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;

  @ValidateBoolean({ optional: true })
  sidebarWeb?: boolean;
}

class TagsUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;

  @ValidateBoolean({ optional: true })
  sidebarWeb?: boolean;
}

class EmailNotificationsUpdate {
  @ValidateBoolean({ optional: true })
  enabled?: boolean;

  @ValidateBoolean({ optional: true })
  albumInvite?: boolean;

  @ValidateBoolean({ optional: true })
  albumUpdate?: boolean;
}

class DownloadUpdate implements Partial<DownloadResponse> {
  @Optional()
  @IsInt()
  @IsPositive()
  @ApiProperty({ type: 'integer' })
  archiveSize?: number;

  @ValidateBoolean({ optional: true })
  includeEmbeddedVideos?: boolean;
}

class PurchaseUpdate {
  @ValidateBoolean({ optional: true })
  showSupportBadge?: boolean;

  @IsDateString()
  @Optional()
  hideBuyButtonUntil?: string;
}

class CastUpdate {
  @ValidateBoolean({ optional: true })
  gCastEnabled?: boolean;
}

export class UserPreferencesUpdateDto {
  @Optional()
  @ValidateNested()
  @Type(() => AlbumsUpdate)
  albums?: AlbumsUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => FoldersUpdate)
  folders?: FoldersUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => MemoriesUpdate)
  memories?: MemoriesUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => PeopleUpdate)
  people?: PeopleUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => RatingsUpdate)
  ratings?: RatingsUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => SharedLinksUpdate)
  sharedLinks?: SharedLinksUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => TagsUpdate)
  tags?: TagsUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => AvatarUpdate)
  avatar?: AvatarUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => EmailNotificationsUpdate)
  emailNotifications?: EmailNotificationsUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => DownloadUpdate)
  download?: DownloadUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => PurchaseUpdate)
  purchase?: PurchaseUpdate;

  @Optional()
  @ValidateNested()
  @Type(() => CastUpdate)
  cast?: CastUpdate;
}

class AlbumsResponse {
  @ValidateEnum({ enum: AssetOrder, name: 'AssetOrder' })
  defaultAssetOrder: AssetOrder = AssetOrder.Desc;
}

class RatingsResponse {
  enabled: boolean = false;
}

class MemoriesResponse {
  enabled: boolean = true;
}

class FoldersResponse {
  enabled: boolean = false;
  sidebarWeb: boolean = false;
}

class PeopleResponse {
  enabled: boolean = true;
  sidebarWeb: boolean = false;
}

class TagsResponse {
  enabled: boolean = true;
  sidebarWeb: boolean = true;
}

class SharedLinksResponse {
  enabled: boolean = true;
  sidebarWeb: boolean = false;
}

class EmailNotificationsResponse {
  enabled!: boolean;
  albumInvite!: boolean;
  albumUpdate!: boolean;
}

class DownloadResponse {
  @ApiProperty({ type: 'integer' })
  archiveSize!: number;

  includeEmbeddedVideos: boolean = false;
}

class PurchaseResponse {
  showSupportBadge!: boolean;
  hideBuyButtonUntil!: string;
}

class CastResponse {
  gCastEnabled: boolean = false;
}

export class UserPreferencesResponseDto implements UserPreferences {
  albums!: AlbumsResponse;
  folders!: FoldersResponse;
  memories!: MemoriesResponse;
  people!: PeopleResponse;
  ratings!: RatingsResponse;
  sharedLinks!: SharedLinksResponse;
  tags!: TagsResponse;
  emailNotifications!: EmailNotificationsResponse;
  download!: DownloadResponse;
  purchase!: PurchaseResponse;
  cast!: CastResponse;
}

export const mapPreferences = (preferences: UserPreferences): UserPreferencesResponseDto => {
  return preferences;
};
