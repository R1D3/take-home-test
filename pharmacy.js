export class Drug {
  constructor (name, expiresIn, benefit) {
    this.name = name
    this.expiresIn = expiresIn
    this.benefit = benefit
  }

  isExpired () {
    if (this.expiresIn > 0) {
      return false
    }
    return true
  }
}

export class Pharmacy {
  constructor (drugs = []) {
    this.drugs = drugs
  }

  regularizeDrugsValues (drug) {
    switch (true) {
      case drug.benefit > 50:
        drug.benefit = 50
        break
      case drug.benefit < 0:
        drug.benefit = 0
        break
      case drug.expiresIn < 0:
        drug.expiresIn = 0
        break
    }
  }

  herbalTea (herbalTea) {
    if (!herbalTea.isExpired()) {
      herbalTea.benefit += 1
      herbalTea.expiresIn -= 1
    } else herbalTea.benefit += 2
    return this.regularizeDrugsValues(herbalTea)
  }

  updateBenefitValue () {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case 'Herbal tea':
          drug = this.herbalTea(drug)
          break
        default:
          break
      }
    })
    return this.drugs
  }
}
