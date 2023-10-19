import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FieldModuleBase } from "./base/field.module.base";
import { FieldService } from "./field.service";
import { FieldController } from "./field.controller";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [FieldModuleBase, forwardRef(() => AuthModule)],
  controllers: [FieldController],
  providers: [FieldService, FieldResolver],
  exports: [FieldService],
})
export class FieldModule {}
