import { Test, TestingModule } from '@nestjs/testing';
import { WalletAssetsController } from './wallet-assets.controller';
import { WalletAssetsService } from './wallet-assets.service';

describe('WalletAssetsController', () => {
  let controller: WalletAssetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletAssetsController],
      providers: [WalletAssetsService],
    }).compile();

    controller = module.get<WalletAssetsController>(WalletAssetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
