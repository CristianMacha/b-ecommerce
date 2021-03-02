import { EntityRepository, Repository } from 'typeorm'

import { Subsidiary } from './subsidiary.entity'

@EntityRepository(Subsidiary)
export class SubsidiaryRepository extends Repository<Subsidiary> {}
