/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Field } from "../../field/base/Field";

@ArgsType()
class ProductFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;
}

export { ProductFindUniqueArgs as ProductFindUniqueArgs };
