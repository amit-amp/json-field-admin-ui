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
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Field } from "../../field/base/Field";
import { UserUpdateInput } from "./UserUpdateInput";

@ArgsType()
class UpdateUserArgs {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateInput)
  @Field(() => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;
}

export { UpdateUserArgs as UpdateUserArgs };
