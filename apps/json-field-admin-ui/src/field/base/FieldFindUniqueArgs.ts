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
import { FieldWhereUniqueInput } from "./FieldWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Field } from "./Field";

@ArgsType()
class FieldFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => FieldWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FieldWhereUniqueInput)
  @Field(() => FieldWhereUniqueInput, { nullable: false })
  where!: FieldWhereUniqueInput;
}

export { FieldFindUniqueArgs as FieldFindUniqueArgs };
