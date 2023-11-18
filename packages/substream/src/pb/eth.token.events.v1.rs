// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Events {
    #[prost(message, repeated, tag="1")]
    pub transfers: ::prost::alloc::vec::Vec<Transfer>,
    #[prost(message, repeated, tag="2")]
    pub approvals: ::prost::alloc::vec::Vec<Approval>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Approval {
    /// The transaction hash that generated that transfer.
    #[prost(string, tag="1")]
    pub trx_hash: ::prost::alloc::string::String,
    /// The index of the log within the transaction's receipts of the block.
    #[prost(uint64, tag="2")]
    pub log_index: u64,
    #[prost(string, tag="3")]
    pub token: ::prost::alloc::string::String,
    #[prost(string, tag="4")]
    pub spender: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub quantity: ::prost::alloc::string::String,
}
#[derive(::serde::Serialize)]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transfer {
    /// The transaction hash that generated that transfer.
    #[prost(string, tag="1")]
    pub trx_hash: ::prost::alloc::string::String,
    /// The index of the log within the transaction's receipts of the block.
    #[prost(uint64, tag="2")]
    pub log_index: u64,
    /// The person that received the transfer, might not be the same as the one that did initiated the
    /// transaction.
    #[prost(string, tag="3")]
    pub from: ::prost::alloc::string::String,
    /// The person that received the transfer.
    #[prost(string, tag="4")]
    pub to: ::prost::alloc::string::String,
    /// How many token were transferred in this transfer, will always be 1 in the case of ERC721.
    #[prost(string, tag="5")]
    pub quantity: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
    pub token: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Contracts {
    #[prost(message, repeated, tag="1")]
    pub contracts: ::prost::alloc::vec::Vec<Contract>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Contract {
    #[prost(string, tag="1")]
    pub address: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub block_number: u64,
    #[prost(string, tag="3")]
    pub timestamp: ::prost::alloc::string::String,
    #[prost(uint64, tag="4")]
    pub ordinal: u64,
}
// @@protoc_insertion_point(module)
