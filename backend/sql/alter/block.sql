alter table block drop block_nonce;

alter table block drop block_reward;

alter table block drop block_tx_ref_ID;

alter table block modify column Block_difficulty int;