// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transfers {
    #[prost(message, repeated, tag="1")]
    pub transfers: ::prost::alloc::vec::Vec<Transfer>,
}
#[derive(::serde::Serialize)]
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transfer {
    /// Schema is the string representation of one of the enum defined in Schema. We use it as a String
    /// here because Rust code uses a `u32` for its representation but it's nicer for the file format
    /// to have the type as a string.
    #[prost(string, tag="1")]
    pub schema: ::prost::alloc::string::String,
    /// The transaction hash that generated that transfer.
    #[prost(string, tag="2")]
    pub trx_hash: ::prost::alloc::string::String,
    /// The index of the log within the transaction's receipts of the block.
    #[prost(uint64, tag="3")]
    pub log_index: u64,
    /// The person that received the transfer, might not be the same as the one that did initiated the
    /// transaction.
    #[prost(string, tag="4")]
    pub from: ::prost::alloc::string::String,
    /// The person that received the transfer.
    #[prost(string, tag="5")]
    pub to: ::prost::alloc::string::String,
    /// How many token were transferred in this transfer, will always be 1 in the case of ERC721.
    #[prost(string, tag="6")]
    pub quantity: ::prost::alloc::string::String,
}
/// Nested message and enum types in `Transfer`.
pub mod transfer {
    #[derive(::serde::Serialize)]
    #[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
    #[repr(i32)]
    pub enum Schema {
        Erc20 = 0,
    }
    impl Schema {
        /// String value of the enum field names used in the ProtoBuf definition.
        ///
        /// The values are not transformed in any way and thus are considered stable
        /// (if the ProtoBuf definition does not change) and safe for programmatic use.
        pub fn as_str_name(&self) -> &'static str {
            match self {
                Schema::Erc20 => "erc20",
            }
        }
        /// Creates an enum from field names used in the ProtoBuf definition.
        pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
            match value {
                "erc20" => Some(Self::Erc20),
                _ => None,
            }
        }
    }
}
// @@protoc_insertion_point(module)
