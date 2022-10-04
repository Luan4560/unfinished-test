// ------------------------------------------------------
// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export interface IFilterDto {
  columnName: Scalars['String'];
  operation: FilterOperationEnum;
  type: FilterFieldTypeEnum;
  value: Array<Scalars['String']>;
}

export enum FilterFieldTypeEnum {
  Null = 'NULL',
  Boolean = 'boolean',
  Date = 'date',
  DateRange = 'dateRange',
  Number = 'number',
  NumberRange = 'numberRange',
  Text = 'text'
}

export enum FilterOperationEnum {
  Contains = 'contains',
  Equal = 'equal',
  NotEqual = 'notEqual'
}

export enum GenreTypeEnum {
  Electronic = 'electronic',
  Hiphop = 'hiphop',
  Jazz = 'jazz',
  Metal = 'metal',
  Pop = 'pop',
  Punk = 'punk',
  Rock = 'rock'
}

export interface IMutation {
  __typename?: 'Mutation';
  /** @protected - create remix */
  createRemix: IRemixModel;
  /** @protected - delete remix */
  deleteRemix: Scalars['Boolean'];
  /** @protected - update remix */
  updateRemix: IRemixModel;
}

export type IMutationCreateRemixArgs = {
  payload: IRemixCreateDto;
};

export type IMutationDeleteRemixArgs = {
  payload: IRemixIdDto;
};

export type IMutationUpdateRemixArgs = {
  payload: IRemixUpdateDto;
};

export interface IPaginateDto {
  skip: Scalars['Int'];
  take: Scalars['Int'];
}

export interface IPaginateModel {
  __typename?: 'PaginateModel';
  isMy?: Maybe<Scalars['Boolean']>;
  maxDate?: Maybe<Scalars['DateTime']>;
  minDate?: Maybe<Scalars['DateTime']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IQuery {
  __typename?: 'Query';
  /** @public - getting a remix by ID */
  remixById: IRemixModel;
  /** @public - getting a list of remixes */
  remixes: IRemixesModel;
}

export type IQueryRemixByIdArgs = {
  payload: IRemixIdDto;
};

export type IQueryRemixesArgs = {
  payload: IRemixGetDto;
};

export interface IRemixCreateDto {
  /** Author's email */
  authorEmail: Scalars['String'];
  /** Description remix */
  description: Scalars['String'];
  genre: GenreTypeEnum;
  isStore: Scalars['Boolean'];
  /** Remix name */
  name: Scalars['String'];
  /** Price */
  price: Scalars['Int'];
  /** Track length */
  trackLength: Scalars['Int'];
}

export interface IRemixGetDto {
  /** parameters for filtering */
  filters?: InputMaybe<Array<IFilterDto>>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  /** parameters for sort */
  sorts?: InputMaybe<Array<ISortDto>>;
}

export interface IRemixIdDto {
  id: Scalars['Int'];
}

export interface IRemixModel {
  __typename?: 'RemixModel';
  /** Author's email */
  authorEmail: Scalars['String'];
  createdDate: Scalars['DateTime'];
  /** Description remix */
  description: Scalars['String'];
  genre: GenreTypeEnum;
  id: Scalars['Int'];
  isStore: Scalars['Boolean'];
  /** Remix name */
  name: Scalars['String'];
  /** Price */
  price: Scalars['Int'];
  /** Track length */
  trackLength: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
}

export interface IRemixUpdateDto {
  /** Author's email */
  authorEmail?: InputMaybe<Scalars['String']>;
  /** Description remix */
  description?: InputMaybe<Scalars['String']>;
  genre?: InputMaybe<GenreTypeEnum>;
  id: Scalars['Int'];
  isStore?: InputMaybe<Scalars['Boolean']>;
  /** Remix name */
  name?: InputMaybe<Scalars['String']>;
  /** Price */
  price?: InputMaybe<Scalars['Int']>;
  /** Track length */
  trackLength?: InputMaybe<Scalars['Int']>;
}

/** TYPE for a list of remixes with pagination */
export interface IRemixesModel {
  __typename?: 'RemixesModel';
  items: Array<IRemixModel>;
  meta: IPaginateModel;
}

export interface ISortDto {
  columnName: Scalars['String'];
  direction: SortDirectionEnum;
}

export enum SortDirectionEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export type ICreateRemixMutationVariables = Exact<{
  authorEmail: Scalars['String'];
  description: Scalars['String'];
  genre: GenreTypeEnum;
  isStore: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  trackLength: Scalars['Int'];
}>;

export type ICreateRemixMutation = {
  __typename?: 'Mutation';
  createRemix: {
    __typename?: 'RemixModel';
    authorEmail: string;
    description: string;
    genre: GenreTypeEnum;
    isStore: boolean;
    name: string;
    price: number;
    trackLength: number;
  };
};

export type IGetRemixesQueryVariables = Exact<{ [key: string]: never }>;

export type IGetRemixesQuery = {
  __typename?: 'Query';
  remixes: {
    __typename?: 'RemixesModel';
    items: Array<{
      __typename?: 'RemixModel';
      id: number;
      price: number;
      isStore: boolean;
      genre: GenreTypeEnum;
      name: string;
      description: string;
      trackLength: number;
      authorEmail: string;
    }>;
  };
};

export const CreateRemixDocument = gql`
  mutation CreateRemix(
    $authorEmail: String!
    $description: String!
    $genre: GenreTypeEnum!
    $isStore: Boolean!
    $name: String!
    $price: Int!
    $trackLength: Int!
  ) {
    createRemix(
      payload: {
        authorEmail: $authorEmail
        description: $description
        genre: $genre
        isStore: $isStore
        name: $name
        price: $price
        trackLength: $trackLength
      }
    ) {
      authorEmail
      description
      genre
      isStore
      name
      price
      trackLength
    }
  }
`;
export type ICreateRemixMutationFn = Apollo.MutationFunction<
  ICreateRemixMutation,
  ICreateRemixMutationVariables
>;

/**
 * __useCreateRemixMutation__
 *
 * To run a mutation, you first call `useCreateRemixMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRemixMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRemixMutation, { data, loading, error }] = useCreateRemixMutation({
 *   variables: {
 *      authorEmail: // value for 'authorEmail'
 *      description: // value for 'description'
 *      genre: // value for 'genre'
 *      isStore: // value for 'isStore'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      trackLength: // value for 'trackLength'
 *   },
 * });
 */
export function useCreateRemixMutation(
  baseOptions?: Apollo.MutationHookOptions<ICreateRemixMutation, ICreateRemixMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<ICreateRemixMutation, ICreateRemixMutationVariables>(
    CreateRemixDocument,
    options
  );
}
export type CreateRemixMutationHookResult = ReturnType<typeof useCreateRemixMutation>;
export type CreateRemixMutationResult = Apollo.MutationResult<ICreateRemixMutation>;
export type CreateRemixMutationOptions = Apollo.BaseMutationOptions<
  ICreateRemixMutation,
  ICreateRemixMutationVariables
>;
export const GetRemixesDocument = gql`
  query GetRemixes {
    remixes(payload: {}) {
      items {
        id
        price
        isStore
        genre
        name
        description
        trackLength
        authorEmail
      }
    }
  }
`;

/**
 * __useGetRemixesQuery__
 *
 * To run a query within a React component, call `useGetRemixesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRemixesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRemixesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRemixesQuery(
  baseOptions?: Apollo.QueryHookOptions<IGetRemixesQuery, IGetRemixesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IGetRemixesQuery, IGetRemixesQueryVariables>(GetRemixesDocument, options);
}
export function useGetRemixesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IGetRemixesQuery, IGetRemixesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IGetRemixesQuery, IGetRemixesQueryVariables>(
    GetRemixesDocument,
    options
  );
}
export type GetRemixesQueryHookResult = ReturnType<typeof useGetRemixesQuery>;
export type GetRemixesLazyQueryHookResult = ReturnType<typeof useGetRemixesLazyQuery>;
export type GetRemixesQueryResult = Apollo.QueryResult<IGetRemixesQuery, IGetRemixesQueryVariables>;
