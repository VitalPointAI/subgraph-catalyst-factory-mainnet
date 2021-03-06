// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CreateDAO extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CreateDAO entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CreateDAO must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CreateDAO", id.toString(), this);
    }
  }

  static load(id: string): CreateDAO | null {
    return changetype<CreateDAO | null>(store.get("CreateDAO", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockTime(): BigInt | null {
    let value = this.get("blockTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockTime(value: BigInt | null) {
    if (!value) {
      this.unset("blockTime");
    } else {
      this.set("blockTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get blockHeight(): BigInt | null {
    let value = this.get("blockHeight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockHeight(value: BigInt | null) {
    if (!value) {
      this.unset("blockHeight");
    } else {
      this.set("blockHeight", Value.fromBigInt(<BigInt>value));
    }
  }

  get blockHash(): string | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHash(value: string | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromString(<string>value));
    }
  }

  get predecessorId(): string | null {
    let value = this.get("predecessorId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set predecessorId(value: string | null) {
    if (!value) {
      this.unset("predecessorId");
    } else {
      this.set("predecessorId", Value.fromString(<string>value));
    }
  }

  get receiverId(): string | null {
    let value = this.get("receiverId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set receiverId(value: string | null) {
    if (!value) {
      this.unset("receiverId");
    } else {
      this.set("receiverId", Value.fromString(<string>value));
    }
  }

  get signerId(): string | null {
    let value = this.get("signerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signerId(value: string | null) {
    if (!value) {
      this.unset("signerId");
    } else {
      this.set("signerId", Value.fromString(<string>value));
    }
  }

  get signerPublicKey(): string | null {
    let value = this.get("signerPublicKey");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signerPublicKey(value: string | null) {
    if (!value) {
      this.unset("signerPublicKey");
    } else {
      this.set("signerPublicKey", Value.fromString(<string>value));
    }
  }

  get gasBurned(): BigInt | null {
    let value = this.get("gasBurned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set gasBurned(value: BigInt | null) {
    if (!value) {
      this.unset("gasBurned");
    } else {
      this.set("gasBurned", Value.fromBigInt(<BigInt>value));
    }
  }

  get tokensBurned(): BigInt | null {
    let value = this.get("tokensBurned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokensBurned(value: BigInt | null) {
    if (!value) {
      this.unset("tokensBurned");
    } else {
      this.set("tokensBurned", Value.fromBigInt(<BigInt>value));
    }
  }

  get outcomeId(): string | null {
    let value = this.get("outcomeId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set outcomeId(value: string | null) {
    if (!value) {
      this.unset("outcomeId");
    } else {
      this.set("outcomeId", Value.fromString(<string>value));
    }
  }

  get executorId(): string | null {
    let value = this.get("executorId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set executorId(value: string | null) {
    if (!value) {
      this.unset("executorId");
    } else {
      this.set("executorId", Value.fromString(<string>value));
    }
  }

  get outcomeBlockHash(): string | null {
    let value = this.get("outcomeBlockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set outcomeBlockHash(value: string | null) {
    if (!value) {
      this.unset("outcomeBlockHash");
    } else {
      this.set("outcomeBlockHash", Value.fromString(<string>value));
    }
  }

  get log(): string | null {
    let value = this.get("log");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set log(value: string | null) {
    if (!value) {
      this.unset("log");
    } else {
      this.set("log", Value.fromString(<string>value));
    }
  }

  get standard(): string | null {
    let value = this.get("standard");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set standard(value: string | null) {
    if (!value) {
      this.unset("standard");
    } else {
      this.set("standard", Value.fromString(<string>value));
    }
  }

  get version(): string | null {
    let value = this.get("version");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set version(value: string | null) {
    if (!value) {
      this.unset("version");
    } else {
      this.set("version", Value.fromString(<string>value));
    }
  }

  get event(): string | null {
    let value = this.get("event");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set event(value: string | null) {
    if (!value) {
      this.unset("event");
    } else {
      this.set("event", Value.fromString(<string>value));
    }
  }

  get contractId(): string | null {
    let value = this.get("contractId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contractId(value: string | null) {
    if (!value) {
      this.unset("contractId");
    } else {
      this.set("contractId", Value.fromString(<string>value));
    }
  }

  get did(): string | null {
    let value = this.get("did");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set did(value: string | null) {
    if (!value) {
      this.unset("did");
    } else {
      this.set("did", Value.fromString(<string>value));
    }
  }

  get deposit(): string | null {
    let value = this.get("deposit");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set deposit(value: string | null) {
    if (!value) {
      this.unset("deposit");
    } else {
      this.set("deposit", Value.fromString(<string>value));
    }
  }

  get status(): string | null {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set status(value: string | null) {
    if (!value) {
      this.unset("status");
    } else {
      this.set("status", Value.fromString(<string>value));
    }
  }

  get created(): BigInt | null {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set created(value: BigInt | null) {
    if (!value) {
      this.unset("created");
    } else {
      this.set("created", Value.fromBigInt(<BigInt>value));
    }
  }

  get summoner(): string | null {
    let value = this.get("summoner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set summoner(value: string | null) {
    if (!value) {
      this.unset("summoner");
    } else {
      this.set("summoner", Value.fromString(<string>value));
    }
  }
}

export class InactivateDAO extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InactivateDAO entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InactivateDAO must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("InactivateDAO", id.toString(), this);
    }
  }

  static load(id: string): InactivateDAO | null {
    return changetype<InactivateDAO | null>(store.get("InactivateDAO", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockTime(): BigInt | null {
    let value = this.get("blockTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockTime(value: BigInt | null) {
    if (!value) {
      this.unset("blockTime");
    } else {
      this.set("blockTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get blockHeight(): BigInt | null {
    let value = this.get("blockHeight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockHeight(value: BigInt | null) {
    if (!value) {
      this.unset("blockHeight");
    } else {
      this.set("blockHeight", Value.fromBigInt(<BigInt>value));
    }
  }

  get blockHash(): string | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHash(value: string | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromString(<string>value));
    }
  }

  get predecessorId(): string | null {
    let value = this.get("predecessorId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set predecessorId(value: string | null) {
    if (!value) {
      this.unset("predecessorId");
    } else {
      this.set("predecessorId", Value.fromString(<string>value));
    }
  }

  get receiverId(): string | null {
    let value = this.get("receiverId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set receiverId(value: string | null) {
    if (!value) {
      this.unset("receiverId");
    } else {
      this.set("receiverId", Value.fromString(<string>value));
    }
  }

  get signerId(): string | null {
    let value = this.get("signerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signerId(value: string | null) {
    if (!value) {
      this.unset("signerId");
    } else {
      this.set("signerId", Value.fromString(<string>value));
    }
  }

  get signerPublicKey(): string | null {
    let value = this.get("signerPublicKey");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set signerPublicKey(value: string | null) {
    if (!value) {
      this.unset("signerPublicKey");
    } else {
      this.set("signerPublicKey", Value.fromString(<string>value));
    }
  }

  get gasBurned(): BigInt | null {
    let value = this.get("gasBurned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set gasBurned(value: BigInt | null) {
    if (!value) {
      this.unset("gasBurned");
    } else {
      this.set("gasBurned", Value.fromBigInt(<BigInt>value));
    }
  }

  get tokensBurned(): BigInt | null {
    let value = this.get("tokensBurned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokensBurned(value: BigInt | null) {
    if (!value) {
      this.unset("tokensBurned");
    } else {
      this.set("tokensBurned", Value.fromBigInt(<BigInt>value));
    }
  }

  get outcomeId(): string | null {
    let value = this.get("outcomeId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set outcomeId(value: string | null) {
    if (!value) {
      this.unset("outcomeId");
    } else {
      this.set("outcomeId", Value.fromString(<string>value));
    }
  }

  get executorId(): string | null {
    let value = this.get("executorId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set executorId(value: string | null) {
    if (!value) {
      this.unset("executorId");
    } else {
      this.set("executorId", Value.fromString(<string>value));
    }
  }

  get outcomeBlockHash(): string | null {
    let value = this.get("outcomeBlockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set outcomeBlockHash(value: string | null) {
    if (!value) {
      this.unset("outcomeBlockHash");
    } else {
      this.set("outcomeBlockHash", Value.fromString(<string>value));
    }
  }

  get log(): string | null {
    let value = this.get("log");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set log(value: string | null) {
    if (!value) {
      this.unset("log");
    } else {
      this.set("log", Value.fromString(<string>value));
    }
  }

  get standard(): string | null {
    let value = this.get("standard");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set standard(value: string | null) {
    if (!value) {
      this.unset("standard");
    } else {
      this.set("standard", Value.fromString(<string>value));
    }
  }

  get version(): string | null {
    let value = this.get("version");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set version(value: string | null) {
    if (!value) {
      this.unset("version");
    } else {
      this.set("version", Value.fromString(<string>value));
    }
  }

  get event(): string | null {
    let value = this.get("event");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set event(value: string | null) {
    if (!value) {
      this.unset("event");
    } else {
      this.set("event", Value.fromString(<string>value));
    }
  }

  get contractId(): string | null {
    let value = this.get("contractId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contractId(value: string | null) {
    if (!value) {
      this.unset("contractId");
    } else {
      this.set("contractId", Value.fromString(<string>value));
    }
  }

  get status(): string | null {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set status(value: string | null) {
    if (!value) {
      this.unset("status");
    } else {
      this.set("status", Value.fromString(<string>value));
    }
  }

  get deactivated(): BigInt | null {
    let value = this.get("deactivated");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set deactivated(value: BigInt | null) {
    if (!value) {
      this.unset("deactivated");
    } else {
      this.set("deactivated", Value.fromBigInt(<BigInt>value));
    }
  }
}
