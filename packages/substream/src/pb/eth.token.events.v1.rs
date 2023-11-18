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
    pub owner: ::prost::alloc::string::String,
    #[prost(string, tag="5")]
    pub spender: ::prost::alloc::string::String,
    #[prost(string, tag="6")]
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
pub struct Spender {
    #[prost(uint64, tag="1")]
    pub allowance: u64,
    #[prost(string, tag="2")]
    pub spender: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Token {
    #[prost(string, tag="1")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub address: ::prost::alloc::string::String,
    #[prost(message, repeated, tag="4")]
    pub spenders: ::prost::alloc::vec::Vec<Spender>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Allowance {
    #[prost(message, repeated, tag="1")]
    pub tokens: ::prost::alloc::vec::Vec<Token>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct SpendersByAddress {
    #[prost(string, repeated, tag="1")]
    pub spenders: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
// @@protoc_insertion_point(module)
