import { Module } from '@nestjs/common';
import { SwapsResolver, WalletSwapsResolver } from './swaps.resolver';
import { SwapsRepoModule } from 'src/repo/swaps/swaps.module';
import { LiquidModule } from 'src/libs/liquid/liquid.module';
import { WalletRepoModule } from 'src/repo/wallet/wallet.module';
import { SideShiftModule } from 'src/libs/sideshift/sideshift.module';

@Module({
  imports: [SwapsRepoModule, SideShiftModule, LiquidModule, WalletRepoModule],
  providers: [SwapsResolver, WalletSwapsResolver],
})
export class SwapsModule {}
